const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const ventana = new BrowserWindow({
    width: 700,
    height: 700
  })
  ventana.loadFile('index.html')
}

app.whenReady().then(createWindow)