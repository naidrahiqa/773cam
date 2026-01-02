# 📸 MirrorCam

Desktop camera application for Windows 11 built with **Electron + React + TypeScript**.

## ✨ Features

- 🎥 **Live Camera Stream** - Real-time webcam with mirror mode
- 📸 **Snapshot** - Save photos instantly
- 📌 **Always On Top** - Pin window above all apps
- ➖ **Minimize Window** - Standard Windows minimize
- 🎨 **Premium Dark UI** - Modern glassmorphism design
- ⚡ **Lightweight** - Small .exe file (~150MB)

## 🚀 Quick Start

### Development Mode

```powershell
# Install dependencies (first time only)
npm install

# Run in dev mode
npm run dev          # Terminal 1: Start Vite server
npm run electron:dev # Terminal 2: Start Electron app
```

### Build .exe

```powershell
# Build production app
npm run build

# Package as .exe (requires electron-builder)
npm install electron-builder --save-dev
npm run electron:build
```

The `.exe` file will be in `dist/` folder.

## 🎮 Controls

- **📸 Camera Icon** - Take snapshot (saves to Downloads)
- **📌 Pin Icon** - Toggle always-on-top mode
- **➖ Minimize Icon** - Minimize window to taskbar

## 🛠️ Tech Stack

- **Electron** - Desktop app framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **CSS3** - Glassmorphism & animations

## 📦 System Requirements

- Windows 11 (or Windows 10)
- Webcam
- ~200MB free storage

## 📄 License

MIT

---

**Made with ❤️ using Electron**
