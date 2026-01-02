declare global {
  interface Window {
    electronAPI?: {
      minimizeWindow: () => void
      toggleAlwaysOnTop: (enabled: boolean) => void
    }
  }
}

export {}
