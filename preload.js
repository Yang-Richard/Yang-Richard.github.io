const { contextBridge } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
    // Add any Electron-specific APIs you need here
    // For now, we'll keep it minimal since your app works with localStorage
    
    // Example: Get app version
    getVersion: () => process.env.npm_package_version || '1.0.0',
    
    // Example: Platform info
    getPlatform: () => process.platform
});