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
// --- IPC HANDLERS ---
// ==========================================

ipcMain.handle('get-ports', async () => {
  try {
    return await SerialPort.list()
  } catch (err) {
    console.error(err)
    return []
  }
})

ipcMain.handle('connect-drone', async (event, portPath) => {
  if (dronePort && dronePort.isOpen && dronePort.path === portPath) return true
  if (dronePort && dronePort.isOpen) {
    clearInterval(heartbeatInterval)
    await new Promise((resolve) => dronePort.close(resolve))
  }

  return new Promise((resolve, reject) => {
    dronePort = new SerialPort({ path: portPath, baudRate: 115200 }, (err) => {
      if (err) {
        console.error('Failed to open:', err)
        reject(err.message)
        return
      }
    })

    const splitter = new MavLinkPacketSplitter()
    const parser = new MavLinkPacketParser()
    dronePort.pipe(splitter).pipe(parser)

    parser.on('data', (packet) => {
      const window = BrowserWindow.getAllWindows()[0]
      const msgId = packet.header.msgid

      let normalizedPacket = {
        header: packet.header,
        payload: packet.payload
      }
      if (msgId === 0) {
        // Ensure we use the correct header property names from node-mavlink
        const sysId = packet.header.srcSystem || packet.header.systemid
        const compId = packet.header.srcComponent || packet.header.componentid

        if (sysId !== undefined && detectedSystemId !== sysId) {
          detectedSystemId = sysId
          detectedComponentId = compId
          console.log(
            `✅ LOCKED ON DRONE: SysID=${detectedSystemId}, CompID=${detectedComponentId}`
          )
        }
      }
    
      if (msgId === 22 && packet.payload) {
        try {
          if (packet.payload.length >= 25) {
            const value = packet.payload.readFloatLE(0)
            const count = packet.payload.readUInt16LE(4)
            const index = packet.payload.readUInt16LE(6)

            const idBuffer = packet.payload.subarray(8, 24)

            let id = idBuffer.toString('ascii').replace(/[^a-zA-Z0-9_.-]/g, '')

            // Fallback: If empty, call it "Unknown"
            if (id.length === 0) id = `PARAM_${index}`

            normalizedPacket.param_id = id
            normalizedPacket.param_value = value
            normalizedPacket.param_count = count
            normalizedPacket.param_index = index

            // Debug Log (Show the CLEANED name)
            // console.log(`>> PARAM [${index}/${count}]: ${id} = ${value}`);
          }
        } catch (err) {
          console.error('Manual Decode Error:', err)
        }
      }

      // ===============================================
      // MANUAL DECODER FOR ATTITUDE (ID 30)
      // ===============================================
      if (msgId === 30 && packet.payload && packet.payload.length >= 28) {
        try {
          normalizedPacket.roll = packet.payload.readFloatLE(4)
          normalizedPacket.pitch = packet.payload.readFloatLE(8)
          normalizedPacket.yaw = packet.payload.readFloatLE(12)
        } catch (e) {}
      }

      let name = `Packet ${msgId}`
      if (msgId === 0) name = 'HEARTBEAT'
      if (msgId === 22) name = 'PARAM_VALUE'
      if (msgId === 30) name = 'ATTITUDE'

      if (window) {
        window.webContents.send('mavlink-data', {
          name: name,
          json: safeStringify(normalizedPacket)
        })
      }
    })

    console.log(`Connected to ${portPath}`)
    startGCSHeartbeat()
    resolve(true)
  })
})

// ==========================================
// --- PACKET SENDERS ---
// ==========================================

function startGCSHeartbeat() {
  if (heartbeatInterval) clearInterval(heartbeatInterval)
  console.log('>> Starting GCS Heartbeat Loop (1Hz)...')

  const sendHeartbeat = () => {
    if (!dronePort || !dronePort.isOpen) return
    const seq = packetSequence++
    if (packetSequence > 255) packetSequence = 0

    // Manual Heartbeat Packet (17 bytes)
    const buf = Buffer.alloc(17)
    buf[0] = 0xfe
    buf[1] = 9
    buf[2] = seq
    buf[3] = 255
    buf[4] = 0
    buf[5] = 0
    buf[6] = 0
    buf[7] = 0
    buf[8] = 0
    buf[9] = 0
    buf[10] = 6
    buf[11] = 8
    buf[12] = 0
    buf[13] = 0
    buf[14] = 3

    let crc = calculateX25CRC(buf.subarray(1, 15))
    crc = accumulateCRCExtra(crc, 50)
    buf[15] = crc & 0xff
    buf[16] = (crc >>> 8) & 0xff
    dronePort.write(buf)
  }
  sendHeartbeat()
  heartbeatInterval = setInterval(sendHeartbeat, 1000)
}

function sendManualParamRequest() {
  if (!dronePort || !dronePort.isOpen) return
  const seq = packetSequence++
  if (packetSequence > 255) packetSequence = 0

  // Manual Param Request Packet (10 bytes)
  const buf = Buffer.alloc(10)
  buf[0] = 0xfe
  buf[1] = 2
  buf[2] = seq
  buf[3] = 255
  buf[4] = 0
  buf[5] = 21
  buf[6] = 1
  buf[7] = 1

  let crc = calculateX25CRC(buf.subarray(1, 8))
  crc = accumulateCRCExtra(crc, 159)
  buf[8] = crc & 0xff
  buf[9] = (crc >>> 8) & 0xff

  dronePort.write(buf)
  console.log(`Sent REQUEST (Msg 21) Seq:${seq} -> Sys:1 Comp:1`)
}

function sendBroadcastParamRequest() {
  if (!dronePort || !dronePort.isOpen) return
  const seq = packetSequence++
  if (packetSequence > 255) packetSequence = 0

  const buf = Buffer.alloc(10)
  buf[0] = 0xfe
  buf[1] = 2
  buf[2] = seq
  buf[3] = 255
  buf[4] = 0
  buf[5] = 21
  buf[6] = 1
  buf[7] = 0

  let crc = calculateX25CRC(buf.subarray(1, 8))
  crc = accumulateCRCExtra(crc, 159)
  buf[8] = crc & 0xff
  buf[9] = (crc >>> 8) & 0xff

  dronePort.write(buf)
  console.log(`Sent REQUEST (Msg 21) Seq:${seq} -> Sys:1 Comp:0`)
}

// --- IPC HANDLERS ---

ipcMain.handle('request-params', async () => {
  if (!dronePort || !dronePort.isOpen) return 'Not Connected'

  // Burst request to ensure the drone wakes up
  sendManualParamRequest()
  setTimeout(sendBroadcastParamRequest, 200)
  setTimeout(sendManualParamRequest, 500)

  return 'Requested'
})

// ==========================================
// --- SMART PARAMETER WRITER ---
// ==========================================
ipcMain.handle('set-param', async (event, arg1, arg2) => {
  if (!dronePort || !dronePort.isOpen) {
    console.error('❌ Write Failed: Disconnected')
    return false
  }

  try {
    let param_id = arg1
    let param_value = arg2

    // 1. SMART UNWRAP (Fixes [OBJECT OBJECT] error)
    // If the frontend sent an object {id: "RTL", val: 1500}, we detect and extract it.
    if (typeof arg1 === 'object' && arg1 !== null) {
      console.log('⚠️ Notice: Arguments received as Object. Auto-correcting...')
      // Try common property names
      param_id = arg1.id || arg1.param_id || arg1.name
      param_value = arg1.value || arg1.val || arg1.param_value
    }

    // 2. Validate & Clean
    const cleanId = String(param_id || '')
      .trim()
      .toUpperCase()
    const floatVal = parseFloat(param_value)

    if (!cleanId) {
      console.error('❌ Error: Parameter ID is missing/empty')
      return false
    }
    if (isNaN(floatVal)) {
      console.error(`❌ Error: Value for '${cleanId}' is not a number:`, param_value)
      return false
    }

    console.log(`📝 Writing: ${cleanId} = ${floatVal}`)

    // 3. Send Logic (Matches Kotlin: Sys 1, Comp 1)
    const targetSys = 1
    const targetComp = 1

    // Send 3 times (Burst) for reliability
    for (let i = 0; i < 3; i++) {
      const seq = packetSequence++
      if (packetSequence > 255) packetSequence = 0

      const buf = Buffer.alloc(31)

      // HEADER
      buf[0] = 0xfe
      buf[1] = 23
      buf[2] = seq
      buf[3] = 255
      buf[4] = 0
      buf[5] = 23 // Msg 23 (PARAM_SET)

      // PAYLOAD
      buf.writeFloatLE(floatVal, 6) // Value
      buf[10] = targetSys
      buf[11] = targetComp

      buf.fill(0, 12, 28)
      buf.write(cleanId, 12, 16, 'ascii') // ID

      buf[28] = 9 // Type 9 (REAL32)

      // CRC
      let crc = calculateX25CRC(buf.subarray(1, 29))
      crc = accumulateCRCExtra(crc, 168)
      buf[29] = crc & 0xff
      buf[30] = (crc >>> 8) & 0xff

      dronePort.write(buf)
      await new Promise((r) => setTimeout(r, 20)) // Fast burst
    }

    // Success
    console.log(`✅ Sent PARAM_SET: ${cleanId} = ${floatVal}`)
    return true
  } catch (err) {
    console.error('❌ Write Exception:', err)
    return false
  }
})

ipcMain.handle('upload-firmware', async (event, args) => {
  // Destructure safely. If args is undefined, it won't crash.
  const { portPath, filePath } = args || {};

  console.log(`🛠️ Preparing upload. Port: ${portPath}, File: ${filePath}`);

  // VALIDATION: This prevents the "undefined" error in your log
  if (!portPath || !filePath) {
    console.error("❌ Upload Error: Missing portPath or filePath");
    throw new Error("Missing Port or Firmware File path");
  }

  if (dronePort && dronePort.isOpen) {
    console.log("🔌 Closing telemetry port for firmware update...");
    clearInterval(heartbeatInterval);
    await new Promise(resolve => dronePort.close(resolve));
    dronePort = null;
  }

  return new Promise((resolve, reject) => {
    let uploaderExecutable;
    if (app.isPackaged) {
      uploaderExecutable = path.join(process.resourcesPath, 'scripts', 'uploader.exe');
    } else {
      uploaderExecutable = path.join(process.cwd(), 'scripts', 'uploader.exe');
    }

    // Use the validated paths
    activeUploadProcess = spawn(uploaderExecutable, ['--port', portPath, filePath]);

    activeUploadProcess.stdout.on('data', (data) => {
      event.sender.send('upload-progress', data.toString());
    });

    activeUploadProcess.stderr.on('data', (data) => {
      console.error('ENGINE ERROR:', data.toString());
    });

    activeUploadProcess.on('close', (code) => {
      activeUploadProcess = null;
      if (code === 0) {
        event.sender.send('upload-progress', 'SUCCESS: Firmware Updated!');
        resolve("Success");
      } else {
        reject(`Engine exited with code ${code}`);
      }
    });
  });
})
ipcMain.handle('cancel-upload', async () => {})
ipcMain.handle('select-file', async () => {
  const result = await dialog.showOpenDialog({ filters: [{ name: 'APJ', extensions: ['apj'] }] })
  return result.filePaths[0] || null
})

// ==========================================
// --- DISCONNECT HANDLER ---
// ==========================================
ipcMain.handle('disconnect-drone', async () => {
  console.log('🔌 Disconnecting Drone...')

  // 1. Stop sending Heartbeats
  if (heartbeatInterval) {
    clearInterval(heartbeatInterval)
    heartbeatInterval = null
  }

  // 2. Close the Serial Port
  if (dronePort && dronePort.isOpen) {
    await new Promise((resolve) => {
      dronePort.close(() => {
        console.log('✅ Port Closed Successfully')
        resolve()
      })
    })
    dronePort = null

    // Reset Globals
    detectedSystemId = 1
    packetSequence = 0

    return true
  }

  return false
})
