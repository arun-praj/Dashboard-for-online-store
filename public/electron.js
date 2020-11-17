const path = require("path");

const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");

const Store = require("electron-store");
const store = new Store();

let installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS; // NEW!

if (isDev) {
   const devTools = require("electron-devtools-installer");

   installExtension = devTools.default;
   REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS;
   REDUX_DEVTOOLS = devTools.REDUX_DEVTOOLS;
} // NEW!
let isMac = process.platform === "darwin";

if (require("electron-squirrel-startup")) {
   app.quit();
}

function createWindow() {
   // Create the browser window.
   const win = new BrowserWindow({
      minWidth: 1087,
      minHeight: 644,
      height: 644,
      width: 1087,
      // show: false,
      // resizable: isDev ? true : false,
      // icon: `${__dirname}/assets/icon.png`,
      // height: 600,
      titleBarStyle: isMac ? "hiddenInset" : "",

      webPreferences: {
         nodeIntegration: true,
         enableRemoteModule: true,
      },
   });

   // and load the index.html of the app.
   // win.loadFile("index.html");
   win.loadURL(
      isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`
   );

   // Open the DevTools.
   if (isDev) {
      win.webContents.openDevTools({ mode: "detach" });
   }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
   createWindow();

   if (isDev) {
      installExtension([REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS])
         .then((name) => console.log(`Added Extension:  ${name}`))
         .catch((error) => console.log(`An error occurred: , ${error}`));
   }
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
   if (process.platform !== "darwin") {
      app.quit();
   }
});

app.on("activate", () => {
   // On macOS it's common to re-create a window in the app when the
   // dock icon is clicked and there are no other windows open.
   if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
   }
});

// const setAuthToken = (token) => {
//    if (token) {
//       console.log("Token set in header", token);
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//    } else {
//       delete axios.defaults.headers.common["Authorization"];
//    }
// };

//set token in store
ipcMain.on("set-token", (event, arg) => {
   store.set("token", arg);
   console.log("SET token : ", store.get("token"));
});
//send toke to app component
ipcMain.on("get-token", (event, arg) => {
   event.reply("token-reply", store.get("token"));
});

ipcMain.on("remove-token", (event, arg) => {
   store.delete("token");
   // event.reply("")
   console.log("Token removed");
});
// Stop error
// Stop error
app.allowRendererProcessReuse = true;
