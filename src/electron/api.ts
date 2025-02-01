import { BrowserWindow, ipcMain, IpcMainInvokeEvent } from "electron";
import { exec } from "child_process";

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
  (_event: IpcMainInvokeEvent, title: string): void => {
    if (window) {
      window.setTitle(title);
    }
  }
);

ipcMain.handle("run-server", (event: IpcMainInvokeEvent) => {
  exec(`docker compose -f src/docker/docker-compose.yml up -d`, (error) => {
    if (error) {
      console.error("Error starting Docker Compose:", error.message);
    } else {
      console.log("Jekyll container started!");
    }
  });
});
