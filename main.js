/*
The Application's main entry point for Electron.
Creates the main window and loads the React app.
*/

// Configure the environment
require('dotenv').config();

// Load Electron modules
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// This module is useful for determining if we're in a
// development environment
const isDev = require('electron-is-dev');
const autoUpdater = require('electron-updater').autoUpdater;

// Other required modules
const url = require('url');
const path = require('path');
const util = require('util');

// Global reference to the window object
let mainWindow;

/**
* Creates the main browser window on which we render
* the application.
*/
function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // Are we in a development environment?
  var appUrl;
  if (isDev) {
    // Open the Chrome development tools
    mainWindow.webContents.openDevTools();
    if (process.env.REACT_DEVTOOLS_PATH !== undefined) {
      BrowserWindow.addDevToolsExtension(process.env.REACT_DEVTOOLS_PATH);
    }

    // Launch into the React application being hosted on
    // a development server
    appUrl = url.format({
      pathname: util.format('localhost:%d', process.env.PORT || 3000),
      protocol: 'http:',
      slashes: true
    });
  } else {
    appUrl = url.format({
      pathname: path.join(__dirname, 'app/index.html'),
      protocol: 'file:',
      slashes: true
    });
  }

  // Launch the React application
  mainWindow.loadURL(appUrl);

  // Bind to the window's 'closed' event
  mainWindow.on('closed', function () {
    // Dereference the window object
    mainWindow = null;
  });
}

// When the electron app is ready, create the window
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q.
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// Check for updates
autoUpdater.checkForUpdatesAndNotify();
