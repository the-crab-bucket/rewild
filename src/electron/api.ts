import { BrowserWindow, ipcMain, IpcMainInvokeEvent } from "electron";

let window: BrowserWindow | null;

export const setMainWindow = (mainWindow: BrowserWindow) => {
  window = mainWindow;
};

ipcMain.handle(
  "node-version",
  (event: IpcMainInvokeEvent, msg: string): string => {
    console.log(event);
    console.log(msg);

    return process.versions.node;
  }
);

ipcMain.handle(
  "set-title",
  (event: IpcMainInvokeEvent, title: string): void => {
    if (window) {
      window.setTitle(title);
    }
  }
);
