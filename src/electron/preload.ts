import { contextBridge, ipcRenderer } from "electron";

export const backend = {
  nodeVersion: async (msg: string): Promise<string> =>
    await ipcRenderer.invoke("node-version", msg),
  setTitle: (title: string) => ipcRenderer.invoke("set-title", title),
  runServer: () => ipcRenderer.invoke("run-server"),
};

contextBridge.exposeInMainWorld("backend", backend);
