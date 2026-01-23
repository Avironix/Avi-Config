import { contextBridge, ipcRenderer } from 'electron'

const api = {
  // --- COMMANDS (Frontend -> Backend) ---
  getPorts: () => ipcRenderer.invoke('get-ports'),
  connectDrone: (path) => ipcRenderer.invoke('connect-drone', path),
  uploadFirmware: (port, file) => ipcRenderer.invoke('upload-firmware', { portPath: port, filePath: file }),
  cancelUpload: () => ipcRenderer.invoke('cancel-upload'),
  selectFile: () => ipcRenderer.invoke('select-file'),
  
  requestParams: () => ipcRenderer.invoke('request-params'),
  setParam: (id, val) => ipcRenderer.invoke('set-param', { param_id: id, param_value: parseFloat(val) }),

  // --- LISTENERS (Backend -> Frontend) ---
  
  // 1. MAVLink Data (Heartbeat, Attitude, Params)
  onMavlinkData: (callback) => {
    const subscription = (event, value) => callback(value)
    ipcRenderer.on('mavlink-data', subscription)
    return () => ipcRenderer.removeListener('mavlink-data', subscription)
  },
  
  // Clean up listener explicitly if needed
  offMavlinkData: (callback) => ipcRenderer.removeListener('mavlink-data', callback),

  // 2. Upload Progress (FIX FOR YOUR ERROR)
  onUploadProgress: (callback) => {
    const subscription = (event, value) => callback(value)
    ipcRenderer.on('upload-progress', subscription)
    return () => ipcRenderer.removeListener('upload-progress', subscription)
  },
  
  // Allow removing the listener
  offUploadProgress: () => ipcRenderer.removeAllListeners('upload-progress')
}

// Expose the API to the renderer
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.api = api
}