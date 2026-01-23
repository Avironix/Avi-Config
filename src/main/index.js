import { app, shell, BrowserWindow, ipcMain, dialog } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { SerialPort } from 'serialport'
import { spawn } from 'child_process'
import path from 'path'

// --- MAVLINK IMPORTS ---
const { MavLinkPacketSplitter, MavLinkPacketParser, MavLinkProtocolV1, MavLinkPacket, common } = require('node-mavlink')
const { ParamSet } = common 

// --- GLOBAL VARIABLES ---
let dronePort = null;
let activeUploadProcess = null;
let packetSequence = 0;

// --- HELPER: JSON Stringify with BigInt Support ---
// Fixes "TypeError: Do not know how to serialize a BigInt"
const safeStringify = (data) => {
  return JSON.stringify(data, (key, value) =>
    typeof value === 'bigint' ? value.toString() : value
  );
};

// --- HELPER: Manual CRC Implementation (X25) ---
function calculateMavlinkCRC(buffer, length) {
  let crc = 0xFFFF;
  // Loop over data (Skip STX at index 0, usually)
  // Check start index based on usage
  for (let i = 1; i < length; i++) { 
    const byte = buffer[i];
    let tmp = byte ^ (crc & 0xFF);
    tmp = (tmp ^ (tmp << 4)) & 0xFF;
    crc = (crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4);
  }
  return crc;
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })
  mainWindow.on('ready-to-show', () => { mainWindow.show() })
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url); return { action: 'deny' }
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
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() })

// ==========================================
// --- IPC HANDLERS ---
// ==========================================

ipcMain.handle('get-ports', async () => {
  try { return await SerialPort.list() } catch (err) { console.error(err); return [] }
})

ipcMain.handle('connect-drone', async (event, portPath) => {
  if (dronePort && dronePort.isOpen && dronePort.path === portPath) return true;
  if (dronePort && dronePort.isOpen) await new Promise(resolve => dronePort.close(resolve));

  return new Promise((resolve, reject) => {
    dronePort = new SerialPort({ path: portPath, baudRate: 115200 }, (err) => {
      if (err) { console.error('Failed to open:', err); reject(err.message); return; }
    });

    const splitter = new MavLinkPacketSplitter();
    const parser = new MavLinkPacketParser(); 
    dronePort.pipe(splitter).pipe(parser);

    parser.on('data', (packet) => {
      const window = BrowserWindow.getAllWindows()[0];
      const msgId = packet.header.msgid;

      // DEBUG LOG
      if (msgId === 0) console.log(`>> HEARTBEAT (SysID: ${packet.header.sysid})`);

      let name = `Packet ${msgId}`;
      if (msgId === 0) name = 'HEARTBEAT';
      if (msgId === 22) name = 'PARAM_VALUE';
      if (msgId === 30) name = 'ATTITUDE';

      if (window) {
        // FIX: Use safeStringify to prevent BigInt crash
        window.webContents.send('mavlink-data', {
          name: name,
          json: safeStringify(packet) 
        });
      }
    });

    console.log(`Connected to ${portPath}`);
    resolve(true);
  });
});

ipcMain.handle('upload-firmware', async (event, { portPath, filePath }) => {
  console.log(`Starting upload to ${portPath}`);
  if (dronePort && dronePort.isOpen) {
    try { await new Promise(resolve => dronePort.close(resolve)); } catch (e) {}
  }
  await new Promise(r => setTimeout(r, 1000));
  const window = BrowserWindow.getAllWindows()[0];

  return new Promise((resolve, reject) => {
    let uploaderExecutable;
    if (app.isPackaged) {
      uploaderExecutable = path.join(process.resourcesPath, 'scripts', 'uploader.exe');
    } else {
      uploaderExecutable = path.join(process.cwd(), 'scripts', 'uploader.exe');
    }
    activeUploadProcess = spawn(uploaderExecutable, ['--port', portPath, filePath]);
    activeUploadProcess.stdout.on('data', (data) => {
      if (window) window.webContents.send('upload-progress', data.toString());
    });
    activeUploadProcess.stderr.on('data', (data) => console.error('ENGINE ERROR:', data.toString()));
    activeUploadProcess.on('close', (code) => {
      activeUploadProcess = null;
      if (code === 0) {
        if (window) window.webContents.send('upload-progress', 'SUCCESS: Firmware Updated!');
        resolve("Success");
      } else {
        reject(`Engine exited with code ${code}`);
      }
    });
  });
});

ipcMain.handle('cancel-upload', async () => {
  if (activeUploadProcess) { activeUploadProcess.kill(); activeUploadProcess = null; return "Cancelled"; }
  return "No process";
});

ipcMain.handle('select-file', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'ArduPilot Firmware', extensions: ['apj'] }]
  });
  return (result.canceled || result.filePaths.length === 0) ? null : result.filePaths[0];
});

// ==========================================
// --- PARAMETER HANDLERS (FULL MANUAL) ---
// ==========================================

function sendManualParamRequest() {
  if (!dronePort || !dronePort.isOpen) return;

  // 1. Prepare Packet Data
  const seq = packetSequence++;
  if (packetSequence > 255) packetSequence = 0;
  
  // 2. Create Buffer: Header (6) + Payload (2) + CRC (2) = 10 Bytes
  const buf = Buffer.alloc(10);
  
  buf[0] = 0xFE; // STX (V1)
  buf[1] = 0x02; // Payload Length
  buf[2] = seq;  // Sequence
  buf[3] = 255;  // SysID (GCS)
  buf[4] = 190;  // CompID (GCS)
  buf[5] = 21;   // MsgID (PARAM_REQUEST_LIST)
  
  // Payload
  buf[6] = 1;    // Target System
  buf[7] = 0;    // Target Component (0 = All/Broadcast)

  // 3. Calculate CRC
  // Step A: Calculate CRC on bytes 1 through 7 (Header + Payload)
  let crc = 0xFFFF;
  for (let i = 1; i <= 7; i++) {
    let tmp = buf[i] ^ (crc & 0xFF);
    tmp = (tmp ^ (tmp << 4)) & 0xFF;
    crc = (crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4);
  }

  // Step B: Accumulate CRC Extra (Magic Number for Msg 21 is 159)
  const crcExtra = 159; 
  let tmp = crcExtra ^ (crc & 0xFF);
  tmp = (tmp ^ (tmp << 4)) & 0xFF;
  crc = (crc >> 8) ^ (tmp << 8) ^ (tmp << 3) ^ (tmp >> 4);

  // 4. Write CRC (Little Endian)
  buf[8] = crc & 0xFF;        // Low byte
  buf[9] = (crc >> 8) & 0xFF; // High byte

  // 5. Send
  dronePort.write(buf);
  console.log(`Sent RAW MsgID 21 (Seq: ${seq})`);
}

// 6. REQUEST PARAMETERS
ipcMain.handle('request-params', async () => {
  if (!dronePort || !dronePort.isOpen) return "Not Connected";
  console.log("Requesting Parameters (Raw Mode)...");
  
  // Use manual sender to avoid library bugs
  sendManualParamRequest();
  
  return "Requested";
});

// 7. SET PARAMETER (Using Library for complex object, wrapped in try/catch)
ipcMain.handle('set-param', async (event, { param_id, param_value }) => {
  if (!dronePort || !dronePort.isOpen) return "Not Connected";
  console.log(`Writing Param: ${param_id} = ${param_value}`);
  
  try {
    const protocol = new MavLinkProtocolV1();
    const packet = new MavLinkPacket();
    packet.header.msgid = 23; // PARAM_SET
    packet.header.sysid = 255;
    packet.header.compid = 190;
    packet.header.seq = packetSequence++;
    if (packetSequence > 255) packetSequence = 0;

    // Construct ParamSet Object
    const payload = new ParamSet();
    payload.target_system = 1;
    payload.target_component = 1;
    payload.param_id = param_id;
    payload.param_value = param_value;
    payload.param_type = 0; // MAKV_PARAM_TYPE_REAL32

    packet.payload = payload;

    const buffer = protocol.serialize(packet);
    dronePort.write(buffer);
    console.log(`Sent MsgID 23 (Seq: ${packet.header.seq})`);
    
  } catch (err) {
    console.error("PARAM SET ERROR:", err);
  }

  return "Sent";
});