const {app,BrowserWindow} = require("electron");
const path = require("path");

function initProgram(){
  win = new BrowserWindow({
    width: 1200,
    height: 900,
    autoHideMenuBar: true,
    webPreferences:{
      devTools: true
    }
  });
  win.loadFile(path.join(__dirname,"../Views/Html/index.html"));
  win.webContents.reloadIgnoringCache();
  win.show();
}
app.on("ready", function(){
  initProgram();
});
