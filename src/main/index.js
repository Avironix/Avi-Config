import { app, shell, BrowserWindow, ipcMain, dialog } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { SerialPort } from 'serialport'
import { spawn } from 'child_process'
import path from 'path'

// --- MAVLINK IMPORTS ---
const { MavLinkPacketSplitter, MavLinkPacketParser } = require('node-mavlink')

// --- GLOBAL VARIABLES ---
let dronePort = null
let packetSequence = 0
let heartbeatInterval = null
let currentPortPath = ''
let currentBaudRate = 115200

let detectedSystemId = 1
let detectedComponentId = 1
let activeUploadProcess = null

// --- HELPER: JSON Stringify with BigInt Support ---
const safeStringify = (data) => {
  return JSON.stringify(data, (key, value) =>
    typeof value === 'bigint' ? value.toString() : value
  )
}

// --- HELPER: CRC Implementation (MAVLink X.25) ---
function calculateX25CRC(buffer) {
  let crc = 0xffff
  for (let i = 0; i < buffer.length; i++) {
    let tmp = buffer[i] ^ (crc & 0xff)
    tmp = (tmp ^ (tmp << 4)) & 0xff
    crc = ((crc >>> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >>> 4)) & 0xffff
  }
  return crc
}

function accumulateCRCExtra(crc, extra) {
  let tmp = extra ^ (crc & 0xff)
  tmp = (tmp ^ (tmp << 4)) & 0xff
  return ((crc >>> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >>> 4)) & 0xffff
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux'
      ? { icon: path.join(__dirname, '../../resources/icon.png') }
      : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.avigreen')
  app.on('browser-window-created', (_, window) => optimizer.watchWindowShortcuts(window))
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// ==========================================
// --- CONNECTION HANDLERS ---
// ==========================================

ipcMain.handle('get-ports', async () => {
  try {
    return await SerialPort.list()
  } catch (err) {
    console.error(err)
    return []
  }
})


ipcMain.handle('connect-drone', async (event, connectionInfo) => {
  // 1. EXTRACT DATA
  // We destructure the object from the frontend and provide defaults
  const { 
    port, 
    baud, 
    dataBits = 8, 
    parity = 'none' 
  } = connectionInfo || {};

  // Map to the internal variables used in the constructor
  const portPath = port;
  const baudRate = parseInt(baud);

  // Update globals for tracking
  currentPortPath = portPath;
  currentBaudRate = baudRate;

  // 2. CLEANUP PREVIOUS ATTEMPTS (Fixes Access Denied)
  if (heartbeatInterval) {
    clearInterval(heartbeatInterval);
    heartbeatInterval = null;
  }

  if (dronePort) {
    try {
      if (dronePort.isOpen) {
        console.log('⚠️ Closing existing open port...');
        await new Promise((resolve) => dronePort.close(resolve));
      }
      dronePort.removeAllListeners();
      dronePort = null;
    } catch (e) {
      console.error('Cleanup error:', e);
    }
  }

  // Validation: Ensure portPath is a string
  if (!portPath || typeof portPath !== 'string') {
    console.error('❌ Port Failed: First argument must be a string. Received:', portPath);
    return false;
  }

  console.log(`📡 Attempting connection to ${portPath} at ${baudRate} baud`);

  return new Promise((resolve) => {
    try {
      // 3. INITIALIZE SERIAL PORT
      dronePort = new SerialPort({
        path: portPath,
        baudRate: baudRate,
        dataBits: dataBits,
        parity: parity,
        autoOpen: false
      });

      dronePort.open((err) => {
        if (err) {
          console.error(`❌ Port Failed: ${err.message}`);
          dronePort = null;
          resolve(false);
          return;
        }

        // 4. SETUP MAVLINK PIPELINE
        const splitter = new MavLinkPacketSplitter();
        const parser = new MavLinkPacketParser();
        dronePort.pipe(splitter).pipe(parser);

        parser.on('data', (packet) => {
          const window = BrowserWindow.getAllWindows()[0];
          const msgId = packet.header.msgid;

          let normalizedPacket = {
            header: packet.header,
            payload: packet.payload
          };

          // --- Heartbeat ID Detection (Msg 0) ---
          if (msgId === 0) {
            const sysId = packet.header.srcSystem || packet.header.systemid;
            const compId = packet.header.srcComponent || packet.header.componentid;

            if (sysId !== undefined && detectedSystemId !== sysId) {
              detectedSystemId = sysId;
              detectedComponentId = compId;
              console.log(`✅ LOCKED ON DRONE: SysID=${detectedSystemId}, CompID=${detectedComponentId}`);
            }
          }

          // --- Param Decoder (Msg 22) ---
          if (msgId === 22 && packet.payload?.length >= 25) {
            try {
              const idBuffer = packet.payload.subarray(8, 24);
              let id = idBuffer.toString('ascii').replace(/[^a-zA-Z0-9_.-]/g, '');
              const index = packet.payload.readUInt16LE(6);

              normalizedPacket.param_id = id || `PARAM_${index}`;
              normalizedPacket.param_value = packet.payload.readFloatLE(0);
              normalizedPacket.param_count = packet.payload.readUInt16LE(4);
              normalizedPacket.param_index = index;
            } catch (err) {
              console.error('Param Decode Error:', err);
            }
          }

          // --- Attitude Decoder (Msg 30) ---
          if (msgId === 30 && packet.payload?.length >= 28) {
            try {
              normalizedPacket.roll = packet.payload.readFloatLE(4);
              normalizedPacket.pitch = packet.payload.readFloatLE(8);
              normalizedPacket.yaw = packet.payload.readFloatLE(12);
            } catch (e) {}
          }

          // 5. SEND DATA TO RENDERER
          if (window) {
            const packetName = msgId === 0 ? 'HEARTBEAT' : 
                               msgId === 22 ? 'PARAM_VALUE' : 
                               msgId === 30 ? 'ATTITUDE' : `Packet ${msgId}`;
            
            window.webContents.send('mavlink-data', {
              name: packetName,
              json: safeStringify(normalizedPacket)
            });
          }
        });

        console.log(`✅ Serial Link Established on ${portPath}`);
        startGCSHeartbeat();
        resolve(true);
      });
    } catch (e) {
      console.error('FATAL ERROR:', e);
      resolve(false);
    }
  });
});

// ==========================================
// --- PACKET SENDERS ---
// ==========================================

function startGCSHeartbeat() {
  if (heartbeatInterval) clearInterval(heartbeatInterval)
  const sendHeartbeat = () => {
    if (!dronePort || !dronePort.isOpen) return
    const seq = packetSequence++
    if (packetSequence > 255) packetSequence = 0

    const buf = Buffer.alloc(17)
    buf[0] = 0xfe
    buf[1] = 9
    buf[2] = seq
    buf[3] = 255
    buf[4] = 0
    buf[5] = 0
    buf[10] = 6
    buf[11] = 8
    buf[14] = 3

    let crc = calculateX25CRC(buf.subarray(1, 15))
    crc = accumulateCRCExtra(crc, 50)
    buf[15] = crc & 0xff
    buf[16] = (crc >>> 8) & 0xff
    dronePort.write(buf)
  }
  heartbeatInterval = setInterval(sendHeartbeat, 1000)
}

// Inside your Main Process (index.js)
ipcMain.handle('request-params', async () => {
  if (!dronePort || !dronePort.isOpen) {
    console.error("❌ Cannot refresh: Serial port is closed.");
    return false;
  }

  const sendReq = (targetComp) => {
    const seq = packetSequence++; 
    if (packetSequence > 255) packetSequence = 0;

    const buf = Buffer.alloc(10);
    buf[0] = 0xfe; // MAVLink 1 STX
    buf[1] = 2;    // Payload length
    buf[2] = seq;  
    buf[3] = 255;  // GCS System ID
    buf[4] = 0;    // GCS Component ID
    buf[5] = 21;   // MAV_CMD_PARAM_REQUEST_LIST
    buf[6] = detectedSystemId; // Target System
    buf[7] = targetComp;       // Target Component

    let crc = calculateX25CRC(buf.subarray(1, 8));
    crc = accumulateCRCExtra(crc, 159); // Seed for Param Request
    buf[8] = crc & 0xff; 
    buf[9] = (crc >>> 8) & 0xff;
    
    dronePort.write(buf);
  };

  // Burst requests to different component IDs to ensure response
  sendReq(detectedComponentId);
  setTimeout(() => sendReq(0), 200); // Broadcast to all components
  
  console.log("📡 Param Refresh Requested...");
  return true;
});
ipcMain.handle('set-param', async (event, arg1, arg2) => {
  if (!dronePort || !dronePort.isOpen) return false
  try {
    let param_id = arg1
    let param_value = arg2

    if (typeof arg1 === 'object' && arg1 !== null) {
      param_id = arg1.id || arg1.param_id || arg1.name
      param_value = arg1.value || arg1.val || arg1.param_value
    }

    const cleanId = String(param_id || '')
      .trim()
      .toUpperCase()
    const floatVal = parseFloat(param_value)

    for (let i = 0; i < 3; i++) {
      const seq = packetSequence++
      if (packetSequence > 255) packetSequence = 0
      const buf = Buffer.alloc(31)
      buf[0] = 0xfe
      buf[1] = 23
      buf[2] = seq
      buf[3] = 255
      buf[4] = 0
      buf[5] = 23
      buf.writeFloatLE(floatVal, 6)
      buf[10] = detectedSystemId
      buf[11] = detectedComponentId
      buf.fill(0, 12, 28)
      buf.write(cleanId, 12, 16, 'ascii')
      buf[28] = 9 // REAL32

      let crc = calculateX25CRC(buf.subarray(1, 29))
      crc = accumulateCRCExtra(crc, 168)
      buf[29] = crc & 0xff
      buf[30] = (crc >>> 8) & 0xff
      dronePort.write(buf)
      await new Promise((r) => setTimeout(r, 20))
    }
    return true
  } catch (err) {
    return false
  }
})

// ==========================================
// --- FIRMWARE & UTILITIES ---
// ==========================================

ipcMain.handle('upload-firmware', async (event, args) => {
  const { portPath, filePath } = args || {}
  if (!portPath || !filePath) throw new Error('Missing Port or Firmware File path')

  if (dronePort && dronePort.isOpen) {
    clearInterval(heartbeatInterval)
    await new Promise((resolve) => dronePort.close(resolve))
    dronePort = null
  }

  return new Promise((resolve, reject) => {
    let uploaderExecutable = app.isPackaged
      ? path.join(process.resourcesPath, 'scripts', 'uploader.exe')
      : path.join(process.cwd(), 'scripts', 'uploader.exe')

    activeUploadProcess = spawn(uploaderExecutable, ['--port', portPath, filePath])

    activeUploadProcess.stdout.on('data', (data) => {
      event.sender.send('upload-progress', data.toString())
    })

    activeUploadProcess.on('close', (code) => {
      activeUploadProcess = null
      if (code === 0) {
        event.sender.send('upload-progress', 'SUCCESS: Firmware Updated!')
        resolve('Success')
      } else {
        reject(`Engine exited with code ${code}`)
      }
    })
  })
})

ipcMain.handle('factory-reset-params', async () => {
  if (!dronePort || !dronePort.isOpen) return false
  try {
    const seq = packetSequence++
    if (packetSequence > 255) packetSequence = 0
    const buf = Buffer.alloc(41)
    buf[0] = 0xfe
    buf[1] = 33
    buf[2] = seq
    buf[3] = 255
    buf[4] = 0
    buf[5] = 76
    buf.writeFloatLE(2, 6) // Reset to default
    buf.writeUInt16LE(245, 34) // MAV_CMD_PREFLIGHT_STORAGE
    buf[36] = detectedSystemId
    buf[37] = detectedComponentId
    let crc = calculateX25CRC(buf.subarray(1, 39))
    crc = accumulateCRCExtra(crc, 152)
    buf[39] = crc & 0xff
    buf[40] = (crc >>> 8) & 0xff
    dronePort.write(buf)
    return true
  } catch (err) {
    return false
  }
})

ipcMain.handle('disconnect-drone', async () => {
  if (heartbeatInterval) clearInterval(heartbeatInterval)
  if (dronePort && dronePort.isOpen) {
    await new Promise((resolve) => dronePort.close(resolve))
    dronePort = null
    return true
  }
  return false
})

ipcMain.handle('select-file', async () => {
  const result = await dialog.showOpenDialog({ filters: [{ name: 'APJ', extensions: ['apj'] }] })
  return result.filePaths[0] || null
})
