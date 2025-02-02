import { contextBridge, ipcRenderer } from "electron";

export const backend = {
  nodeVersion: async (msg: string): Promise<string> =>
    await ipcRenderer.invoke("node-version", msg),
  setTitle: (title: string) => ipcRenderer.invoke("set-title", title),
  runDevServer: () => ipcRenderer.invoke("run-dev-server"),
  killDevServer: () => ipcRenderer.invoke("kill-dev-server"),
  runProdServer: () => ipcRenderer.invoke("run-prod-server"),
  killProdServer: () => ipcRenderer.invoke("kill-prod-server"),
  heartbeat: async (): Promise<string> => await ipcRenderer.invoke("heartbeat"),
};

contextBridge.exposeInMainWorld("backend", backend);
