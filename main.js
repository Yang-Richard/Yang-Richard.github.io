const { app, BrowserWindow, Menu, shell, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs').promises;

// Fix for GPU process errors (especially on Linux/WSL)
if (process.platform === 'linux') {
    app.commandLine.appendSwitch('disable-gpu');
    app.commandLine.appendSwitch('disable-software-rasterizer');
}
// Optional: uncomment these if you still see GPU errors
// app.commandLine.appendSwitch('disable-gpu-sandbox');
// app.commandLine.appendSwitch('no-sandbox');

let mainWindow;
let isDev = process.argv.includes('--dev');
let autosaveFilePath = null; // Store the selected autosave file path

function createWindow() {
    // Create the browser window
    mainWindow = new BrowserWindow({
        width: 1900,
        height: 1000,
        minWidth: 1900,
        minHeight: 1000,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: true // Allow loading external fonts
        },
        icon: path.join(__dirname, 'build/icon.ico'), // You'll need to add an icon
        show: false
    });

    // Load the index.html file
    mainWindow.loadFile('index.html');

    // Show window when ready
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    // Open DevTools in development
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    // Emitted when the window is closed
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // Create application menu
    createMenu();
}

function createMenu() {
    const template = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'New Todo',
                    accelerator: 'CmdOrCtrl+N',
                    click: () => {
                        mainWindow.webContents.executeJavaScript(`
                            document.querySelector('.todo-input').focus();
                        `);
                    }
                },
                { type: 'separator' },
                {
                    label: 'Exit',
                    accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
                    click: () => {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { label: 'Undo', accelerator: 'CmdOrCtrl+Z', role: 'undo' },
                { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', role: 'redo' },
                { type: 'separator' },
                { label: 'Cut', accelerator: 'CmdOrCtrl+X', role: 'cut' },
                { label: 'Copy', accelerator: 'CmdOrCtrl+C', role: 'copy' },
                { label: 'Paste', accelerator: 'CmdOrCtrl+V', role: 'paste' }
            ]
        },
        {
            label: 'View',
            submenu: [
                {
                    label: 'Reload',
                    accelerator: 'CmdOrCtrl+R',
                    click: () => {
                        mainWindow.reload();
                    }
                },
                {
                    label: 'Toggle Developer Tools',
                    accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
                    click: () => {
                        mainWindow.webContents.toggleDevTools();
                    }
                },
                { type: 'separator' },
                { label: 'Actual Size', accelerator: 'CmdOrCtrl+0', role: 'resetZoom' },
                { label: 'Zoom In', accelerator: 'CmdOrCtrl+Plus', role: 'zoomIn' },
                { label: 'Zoom Out', accelerator: 'CmdOrCtrl+-', role: 'zoomOut' },
                { type: 'separator' },
                { label: 'Toggle Fullscreen', accelerator: 'F11', role: 'togglefullscreen' }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'About',
                    click: () => {
                        mainWindow.webContents.executeJavaScript(`
                            if (window.todoApp && window.todoApp.showPanel) {
                                window.todoApp.showPanel('wiki');
                            }
                        `);
                    }
                },
                {
                    label: 'Learn More',
                    click: () => {
                        shell.openExternal('https://github.com/yourusername/todo-app');
                    }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

// This method will be called when Electron has finished initialization
app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    // On macOS it is common for applications to stay open until explicitly quit
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window when the dock icon is clicked
    if (mainWindow === null) {
        createWindow();
    }
});

// Security: Prevent new window creation
app.on('web-contents-created', (event, contents) => {
    contents.on('new-window', (event, navigationUrl) => {
        // In this example, we'll ask the OS to open this event's url in the default browser
        event.preventDefault();
        shell.openExternal(navigationUrl);
    });
});

// IPC handlers for file operations
ipcMain.handle('select-save-file', async () => {
    const result = await dialog.showSaveDialog(mainWindow, {
        title: 'Select Autosave File',
        defaultPath: `todo-autosave-${new Date().toISOString().split('T')[0]}.json`,
        filters: [
            { name: 'JSON Files', extensions: ['json'] },
            { name: 'All Files', extensions: ['*'] }
        ]
    });
    
    if (!result.canceled) {
        autosaveFilePath = result.filePath;
        return result.filePath;
    }
    return null;
});

ipcMain.handle('save-to-file', async (event, filePath, data) => {
    try {
        // Use the stored autosave path if no path is provided
        const targetPath = filePath || autosaveFilePath;
        if (!targetPath) {
            throw new Error('No file path specified');
        }
        
        await fs.writeFile(targetPath, data, 'utf8');
        return { success: true };
    } catch (error) {
        console.error('Error saving file:', error);
        return { success: false, error: error.message };
    }
});

ipcMain.handle('read-from-file', async (event, filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return { success: true, data };
    } catch (error) {
        console.error('Error reading file:', error);
        return { success: false, error: error.message };
    }
});

ipcMain.handle('get-stored-file-path', () => {
    return autosaveFilePath;
});

ipcMain.handle('set-stored-file-path', (event, filePath) => {
    autosaveFilePath = filePath;
    return { success: true };
});

ipcMain.handle('clear-stored-file-path', () => {
    autosaveFilePath = null;
    return { success: true };
});

// Export functionality
ipcMain.handle('select-export-file', async () => {
    const result = await dialog.showSaveDialog(mainWindow, {
        title: 'Export Todo Data',
        defaultPath: `daily-todos-${new Date().toISOString().split('T')[0]}.json`,
        filters: [
            { name: 'JSON Files', extensions: ['json'] },
            { name: 'All Files', extensions: ['*'] }
        ]
    });
    
    if (!result.canceled) {
        return result.filePath;
    }
    return null;
});

// Import functionality
ipcMain.handle('select-import-file', async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
        title: 'Import Todo Data',
        filters: [
            { name: 'JSON Files', extensions: ['json'] },
            { name: 'CSV Files', extensions: ['csv'] },
            { name: 'Text Files', extensions: ['txt'] },
            { name: 'All Files', extensions: ['*'] }
        ],
        properties: ['openFile']
    });
    
    if (!result.canceled && result.filePaths.length > 0) {
        try {
            const filePath = result.filePaths[0];
            const data = await fs.readFile(filePath, 'utf8');
            return { 
                success: true, 
                data: data, 
                filePath: filePath,
                fileName: path.basename(filePath)
            };
        } catch (error) {
            console.error('Error reading import file:', error);
            return { success: false, error: error.message };
        }
    }
    return { success: false, error: 'No file selected' };
});

// Native notification support
ipcMain.handle('show-notification', async (event, title, options) => {
    try {
        const { Notification } = require('electron');
        
        if (Notification.isSupported()) {
            const notification = new Notification({
                title: title,
                body: options.body || '',
                icon: options.icon || path.join(__dirname, 'build/icon.ico'), // Use app icon as fallback
                silent: options.silent || false
            });
            
            notification.show();
            return { success: true };
        } else {
            return { success: false, error: 'Notifications not supported' };
        }
    } catch (error) {
        console.error('Error showing notification:', error);
        return { success: false, error: error.message };
    }
});