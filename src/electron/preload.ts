import { contextBridge, ipcRenderer } from "electron";

export const backend = {
  nodeVersion: async (msg: string): Promise<string> =>
    await ipcRenderer.invoke("node-version", msg),
  setTitle: (title: string) => ipcRenderer.send("set-title", title),
};

contextBridge.exposeInMainWorld("backend", backend);
