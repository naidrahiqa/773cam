const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  minimizeWindow: () => ipcRenderer.send('minimize-window'),
  toggleAlwaysOnTop: (enabled) => ipcRenderer.send('toggle-always-on-top', enabled)
})
