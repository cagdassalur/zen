import { app, BrowserWindow } from 'electron'
const brightness = require('brightness');

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow;
let minimizedWindow;
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080/`
  : `file://${__dirname}/index.html`

const minimizedWinURL = process.env.NODE_ENV === 'development'
? `http://localhost:9080/index.html#minimized`
: `file://${__dirname}/index.html#minimized`

function createMainWindow () {
  mainWindow = new BrowserWindow({
    height: 515,
    width: 540,
    x: 0,
    y: 1080,
    useContentSize: true,
    frame: false,
    alwaysOnTop:true,
    backgroundColor:"#000",
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      // devTools: false
    }
  })
  mainWindow.loadURL(winURL)
  mainWindow.on('closed', () => { mainWindow = null })
}

function createMinimizedWindow () {
  minimizedWindow = new BrowserWindow({
    height: 40,
    width: 40,
    x: 0,
    y: 1550,
    useContentSize: true,
    frame: false,
    alwaysOnTop:true,
    backgroundColor:"#000",
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      // devTools: false
    }
  })
  minimizedWindow.loadURL(minimizedWinURL)
  minimizedWindow.on('closed', () => { minimizedWindow = null })
}

app.on('ready', createMainWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
