const { app, BrowserWindow, Menu, shell, ipcMain, dialog, nativeTheme, globalShortcut } = require('electron');
const path = require('path');
const fs = require('fs').promises;
const fsSync = require('fs');
const appConfig = require('./appConfig');

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
let windowState = null; // Store window state for persistence

function createWindow() {
    // Load saved window state
    const savedState = loadWindowState();
    
    // Create the browser window
    mainWindow = new BrowserWindow({
        width: savedState?.width || 1900,
        height: savedState?.height || 1000,
        x: savedState?.x,
        y: savedState?.y,
        minWidth: 1536,
        minHeight: 960,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: true, // Allow loading external fonts
            spellcheck: true // Enable spellcheck
        },
        icon: path.join(__dirname, 'build/icon.ico'), // You'll need to add an icon
        show: false,
        frame: false, // Remove title bar and window controls
        autoHideMenuBar: false, // Doesn't work with frameless, we'll implement custom solution
        backgroundColor: '#1e1e1e', // Set background color to prevent white flash
        titleBarStyle: 'hidden', // macOS specific: hide title bar but keep traffic lights
        trafficLightPosition: { x: 10, y: 10 }, // macOS: position traffic lights
        transparent: false, // Could enable for custom backgrounds
        hasShadow: true, // Window shadow for depth
        roundedCorners: true // Rounded corners on supported platforms
    });
    
    // Restore maximized state if it was maximized
    if (savedState?.isMaximized) {
        mainWindow.maximize();
    }

    // Load the index.html file
    mainWindow.loadFile('index.html');

    // Show window when ready with fade-in effect
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        
        // Smooth fade-in animation
        let opacity = 0;
        const fadeIn = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(fadeIn);
                return;
            }
            opacity += 0.1;
            mainWindow.setOpacity(opacity);
        }, 20);
    });
    
    // Save window state on resize/move
    ['resize', 'move', 'close'].forEach(event => {
        mainWindow.on(event, () => {
            saveWindowState();
        });
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
                        // Show about dialog using config
                        dialog.showMessageBox(mainWindow, {
                            type: 'info',
                            title: `About ${appConfig.name}`,
                            message: appConfig.name,
                            detail: appConfig.aboutDetails(),
                            buttons: ['OK'],
                            icon: path.join(__dirname, 'build/icon.ico')
                        });
                    }
                },
                {
                    label: 'Learn More',
                    click: () => {
                        // Switch to Wiki panel in the app
                        mainWindow.webContents.executeJavaScript(`
                            // Find and click the Wiki button
                            const wikiBtn = document.getElementById('wikiNavBtn');
                            if (wikiBtn) {
                                wikiBtn.click();
                            }
                        `);
                    }
                },
                { type: 'separator' },
                {
                    label: 'Keyboard Shortcuts',
                    accelerator: 'CmdOrCtrl+/',
                    click: () => {
                        // Show keyboard shortcuts dialog
                        dialog.showMessageBox(mainWindow, {
                            type: 'info',
                            title: 'Keyboard Shortcuts',
                            message: 'Keyboard Shortcuts',
                            detail: 'Navigation:\n' +
                                    'Ctrl+1 to Ctrl+9 - Switch between panels\n' +
                                    'T - Go to Today\n' +
                                    'Arrow Keys - Navigate days\n\n' +
                                    'Actions:\n' +
                                    'S - New Section\n' +
                                    'N - Move items to next day\n' +
                                    'A - Focus on new item input\n' +
                                    'P - Start/Stop Pomodoro\n\n' +
                                    'Window (Electron):\n' +
                                    'Alt - Show Menu\n' +
                                    'Ctrl+Shift+T - Toggle Always on Top\n' +
                                    'F11 - Toggle Fullscreen\n' +
                                    'Ctrl+M - Minimize',
                            buttons: ['OK']
                        });
                    }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
    createWindow();
    
    // Register global shortcuts
    registerGlobalShortcuts();
    
    // Handle system theme changes
    nativeTheme.on('updated', () => {
        mainWindow.webContents.send('theme-changed', nativeTheme.shouldUseDarkColors);
    });
});

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
        defaultPath: `todo-autosave-${new Date().toISOString().replace(/:/g, '-').replace(/\./g, '-')}.json`,
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

// Window state management functions
function saveWindowState() {
    if (!mainWindow) return;
    
    const state = {
        width: mainWindow.getBounds().width,
        height: mainWindow.getBounds().height,
        x: mainWindow.getBounds().x,
        y: mainWindow.getBounds().y,
        isMaximized: mainWindow.isMaximized()
    };
    
    // Save to localStorage via IPC or to a file
    try {
        fsSync.writeFileSync(
            path.join(app.getPath('userData'), 'window-state.json'),
            JSON.stringify(state)
        );
    } catch (error) {
        console.error('Error saving window state:', error);
    }
}

function loadWindowState() {
    try {
        const statePath = path.join(app.getPath('userData'), 'window-state.json');
        if (fsSync.existsSync(statePath)) {
            return JSON.parse(fsSync.readFileSync(statePath, 'utf8'));
        }
    } catch (error) {
        console.error('Error loading window state:', error);
    }
    return null;
}

// Register global shortcuts for better UX
function registerGlobalShortcuts() {
    // Toggle always on top
    globalShortcut.register('CmdOrCtrl+Shift+T', () => {
        const isAlwaysOnTop = mainWindow.isAlwaysOnTop();
        mainWindow.setAlwaysOnTop(!isAlwaysOnTop);
        mainWindow.webContents.send('always-on-top-changed', !isAlwaysOnTop);
    });
    
    // Quick minimize
    globalShortcut.register('CmdOrCtrl+Q', () => {
        mainWindow.minimize();
    });
    
    // Toggle fullscreen
    globalShortcut.register('F11', () => {
        mainWindow.setFullScreen(!mainWindow.isFullScreen());
    });
}

// Cleanup on app quit
app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});

// Handle window control from renderer (for custom buttons)
ipcMain.handle('window-minimize', () => {
    mainWindow.minimize();
    return { success: true };
});

ipcMain.handle('window-maximize', () => {
    if (mainWindow.isMaximized()) {
        mainWindow.unmaximize();
    } else {
        mainWindow.maximize();
    }
    return { success: true, isMaximized: mainWindow.isMaximized() };
});

ipcMain.handle('window-close', () => {
    mainWindow.close();
    return { success: true };
});

// Handle draggable regions
ipcMain.handle('set-window-position', (event, x, y) => {
    mainWindow.setPosition(x, y);
    return { success: true };
});

// Get system theme
ipcMain.handle('get-system-theme', () => {
    return {
        isDark: nativeTheme.shouldUseDarkColors,
        theme: nativeTheme.themeSource
    };
});

// Toggle always on top
ipcMain.handle('toggle-always-on-top', () => {
    const isAlwaysOnTop = mainWindow.isAlwaysOnTop();
    mainWindow.setAlwaysOnTop(!isAlwaysOnTop);
    return { success: true, isAlwaysOnTop: !isAlwaysOnTop };
});

// Show menu popup when Alt is pressed (for frameless window)
ipcMain.handle('show-menu-popup', () => {
    const menu = Menu.getApplicationMenu();
    if (menu) {
        menu.popup({
            window: mainWindow,
            x: 0,
            y: 0
        });
    }
    return { success: true };
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

// Open URL in external browser
ipcMain.handle('open-external', async (event, url) => {
    try {
        await shell.openExternal(url);
        return { success: true };
    } catch (error) {
        console.error('Error opening external URL:', error);
        return { success: false, error: error.message };
    }
});