const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
    // Add any Electron-specific APIs you need here
    // For now, we'll keep it minimal since your app works with localStorage
    
    // Example: Get app version
    getVersion: () => process.env.npm_package_version || '1.0.0',
    
    // Example: Platform info
    getPlatform: () => process.platform,
    
    // File operations for autosave
    selectSaveFile: () => ipcRenderer.invoke('select-save-file'),
    saveToFile: (filePath, data) => ipcRenderer.invoke('save-to-file', filePath, data),
    readFromFile: (filePath) => ipcRenderer.invoke('read-from-file', filePath),
    getStoredFilePath: () => ipcRenderer.invoke('get-stored-file-path'),
    setStoredFilePath: (filePath) => ipcRenderer.invoke('set-stored-file-path', filePath),
    clearStoredFilePath: () => ipcRenderer.invoke('clear-stored-file-path')
});