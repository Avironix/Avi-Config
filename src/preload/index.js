import { contextBridge, ipcRenderer } from 'electron'

const api = {
  factoryResetParams: () => ipcRenderer.invoke('factory-reset-params'),
  getPorts: () => ipcRenderer.invoke('get-ports'),
  connectDrone: (path) => ipcRenderer.invoke('connect-drone', path),
  uploadFirmware: (data) => ipcRenderer.invoke('upload-firmware', data),
  cancelUpload: () => ipcRenderer.invoke('cancel-upload'),
  onUploadProgress: (callback) => {
    const subscription = (_event, value) => callback(value)
    ipcRenderer.on('upload-progress', subscription)
    return () => ipcRenderer.removeListener('upload-progress', subscription)
  },
  selectFile: () => ipcRenderer.invoke('select-file'),
  disconnectDrone: () => ipcRenderer.invoke('disconnect-drone'),

  requestParams: () => ipcRenderer.invoke('request-params'),
  setParam: (id, value) => ipcRenderer.invoke('set-param', id, value),

  onMavlinkData: (callback) => {
    const subscription = (event, value) => callback(value)
    ipcRenderer.on('mavlink-data', subscription)
    return () => ipcRenderer.removeListener('mavlink-data', subscription)
  },

  // Clean up listener explicitly if needed
  offMavlinkData: (callback) => ipcRenderer.removeListener('mavlink-data', callback),

  // 2. Upload Progress (FIX FOR YOUR ERROR)

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
