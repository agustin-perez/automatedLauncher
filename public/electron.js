const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');
const url = require('url');
 
let mainWindow;
 
function createWindow() {
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
        show: false,
        backgroundColor: '#FFFFFF'
    });
    //const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, './build/index.html')}`;
    //mainWindow.loadURL('http://localhost:3000');
    
    if(isDev){
        mainWindow.loadURL('http://localhost:3000')
    } else {
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }
     
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    mainWindow.removeMenu();
}
app.on('ready', createWindow);