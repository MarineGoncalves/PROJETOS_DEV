const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('node:path')

// Função assíncrona que cria a janela principal da aplicação
var mainWindow = null;
async function createWindow(){
    mainWindow = new BrowserWindow({
        width: 1220,
        height: 800,
        //autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')

          }
    });

    
    // Carrega o arquivo HTML da página de login
    await mainWindow.loadFile('src/pages/login/index.html');
    

}

// Evento disparado quando o Electron termina a inicialização
app.whenReady().then(()=>{

    createWindow()
   
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow()
        }
      })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})