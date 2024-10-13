const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'eLibrary',
        width: 1000,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    // Check if we're in development mode
    const isDev = process.env.NODE_ENV === 'development';

    if (isDev) {
        // Load the React development server
        mainWindow.loadURL('http://localhost:3000');
    } else {
        // Load the static build files in production mode
        const startUrl = url.format({
            pathname: path.join(__dirname, './app/build/index.html'),
            protocol: 'file:',
            slashes: true,
        });
        mainWindow.loadURL(startUrl);
    }

    // Open DevTools automatically if in development mode
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
}

app.whenReady().then(createMainWindow);