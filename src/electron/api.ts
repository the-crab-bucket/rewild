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

ipcMain.handle("run-dev-server", (_event: IpcMainInvokeEvent) => {
  exec(
    `docker compose -f src/docker/docker-compose.yml --profile dev up --build -d`,
    (error) => {
      if (error) {
        console.error("Error starting Docker Compose:", error.message);
      } else {
        console.log("Jekyll started!");
      }
    }
  );
});

ipcMain.handle("kill-dev-server", (_event: IpcMainInvokeEvent) => {
  exec(
    `docker compose -f src/docker/docker-compose.yml --profile dev down`,
    (error) => {
      if (error) {
        console.error("Error stopping docker:", error.message);
      } else {
        console.log("Jekyll stopped!");
      }
    }
  );
});

ipcMain.handle("run-prod-server", (_event: IpcMainInvokeEvent) => {
  exec(
    `docker compose -f src/docker/docker-compose.yml --profile production up --build -d`,
    (error) => {
      if (error) {
        console.error("Error starting Docker Compose:", error.message);
      } else {
        console.log("Jekyll started!");
      }
    }
  );
});

ipcMain.handle("kill-prod-server", (_event: IpcMainInvokeEvent) => {
  exec(
    `docker compose -f src/docker/docker-compose.yml --profile production down`,
    (error) => {
      if (error) {
        console.error("Error stopping docker:", error.message);
      } else {
        console.log("Jekyll stopped!");
      }
    }
  );
});
