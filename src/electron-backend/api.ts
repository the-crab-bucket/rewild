import { exec, execSync } from "child_process";
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
  (_event: IpcMainInvokeEvent, title: string): void => {
    if (window) {
      window.setTitle(title);
    }
  }
);

const DOCKER_PREFIX = "docker-compose -f src/website/docker-compose.yml ";

ipcMain.handle("run-dev-server", (_event: IpcMainInvokeEvent) => {
  exec(DOCKER_PREFIX + "--profile dev up --build -d", (error) => {
    if (error) {
      console.error("Error starting Docker Compose:", error.message);
    } else {
      console.log("Jekyll started!");
    }
  });
});

ipcMain.handle("kill-dev-server", (_event: IpcMainInvokeEvent) => {
  exec(DOCKER_PREFIX + "--profile dev down", (error) => {
    if (error) {
      console.error("Error stopping docker:", error.message);
    } else {
      console.log("Jekyll stopped!");
    }
  });
});

ipcMain.handle("run-prod-server", (_event: IpcMainInvokeEvent) => {
  exec(DOCKER_PREFIX + "--profile prod up --build -d", (error) => {
    if (error) {
      console.error("Error starting Docker Compose:", error.message);
    } else {
      console.log("Jekyll started!");
    }
  });
});

ipcMain.handle("kill-prod-server", (_event: IpcMainInvokeEvent) => {
  exec(DOCKER_PREFIX + "--profile prod down", (error) => {
    if (error) {
      console.error("Error stopping docker:", error.message);
    } else {
      console.log("Jekyll stopped!");
    }
  });
});

ipcMain.handle(
  "dockerHeartbeat",
  async (_event: IpcMainInvokeEvent): Promise<string> => {
    console.log("Call docker heartbeat");
    let childProcess = execSync(`docker ps`);
    return childProcess.toString();
  }
);

ipcMain.handle(
  "batteryHeartbeat",
  async (_event: IpcMainInvokeEvent): Promise<string> => {
    console.log("Calling battery heartbeat");
    let childProcess = execSync(`pmset -g batt`); // THIS COMMAND IS ONLY FOR MAC
    return childProcess.toString();
  }
);
