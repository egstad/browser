const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

if (process.argv.includes('--dev')) {
  require('electron-reload')(__dirname, {
    electron: require.resolve('electron/cli.js'),
    hardResetMethod: 'exit'
  });
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
      webviewTag: true,
      preload: path.join(__dirname, 'preload.js')
    },
    titleBarStyle: 'hidden',
    trafficLightPosition: { x: -100, y: -100 }
  });

  mainWindow.loadFile('index.html');

  globalShortcut.register('CommandOrControl+L', () => {
    mainWindow.webContents.send('toggle-spotlight');
  });

  globalShortcut.register('CommandOrControl+Left', () => {
    mainWindow.webContents.send('navigate-back');
  });

  globalShortcut.register('CommandOrControl+Right', () => {
    mainWindow.webContents.send('navigate-forward');
  });

  return mainWindow;
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  globalShortcut.unregisterAll();
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});