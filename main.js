const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');
const { start } = require('repl');

// Creating the main window of the Electron app.
function createMainWindow() {
    // Create a new instance of 'BrowserWindow' with the specified width, height, and title.
    const mainWindow = new BrowserWindow({
        title: 'eLibrary',
        width: 1000,
        height: 600
    });

    // Format the path to the CRA index.html file which will be served in the window.
    // 'path.join' ensures the path works across different operating systems.
    const startUrl = url.format({
        pathname: path.join(__dirname, './app/build/index.html'),
        protocol: 'file',  // Uses the 'file' protocol to serve the local file
    });

    // Load index.html into the main window.
    mainWindow.loadURL(startUrl);
}

// After initializing, create the main window.
// 'app.whenReady()' ensures the window is created only after the app is fully ready.
app.whenReady().then(createMainWindow);