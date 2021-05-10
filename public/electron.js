const launch = require('@xmcl/core'); 
let { login, Authentication, offline } = require('@xmcl/user');
//import { Authenticator } from 'minecraft-launcher-core';
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');
const url = require('url');
const ipcMain = require('electron').ipcMain;

let mainWindow;

//const launcher = new Client();

async function triggerLauncher(ops){
    const launchObj = launch;
    launch.ops = ops; 
    const process = await launchObj;
    process.stdout.on('data', (b) => {
        console.log(b.toString());
    });
    process.stderr.on('data', (b) => {
        console.log(b.toString());
    });
}


function createWindow() {
    mainWindow = new BrowserWindow({
        width:1024,
        height:768,
        minWidth:800,
        minHeight:600,
        backgroundColor: '#FFFFFF',
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    
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

ipcMain.on('request-minecraft-launch', async (event, opts, authKeypair) => {
    console.log('Starting minecraft launch process');
    const optsParse = JSON.parse(JSON.stringify(opts));
    let authentication = Authentication = offline(authKeypair.username)
    //const authParse = JSON.parse(authKeypair);
    const arg = {
        ...optsParse,
        accessToken: authentication.accessToken,
        gameProfile: authentication.selectedProfile
    }
    console.log('------------------------------------');
    console.log(arg);
    console.log('------------------------------------');
    triggerLauncher(arg);
});