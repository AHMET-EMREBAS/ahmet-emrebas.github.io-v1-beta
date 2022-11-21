import {
  contextBridge,
  ipcRenderer,
  session,
} from 'electron';

const cookies = new Map();

contextBridge.exposeInMainWorld('electron', {
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  platform: process.platform,

  setCookie: async (name: string, value: string) => {
    if (session) {
      await session?.defaultSession?.cookies.set({
        name,
        value,
        url: 'http://localhost:4200',
        path: '',
      });
    } else {
      cookies.set(name, value);
    }
  },
  getCookie: async (name: string) => {
    if (session) {
      return await session?.defaultSession?.cookies.get({ name });
    } else {
      return cookies.get(name);
    }
  },
});
