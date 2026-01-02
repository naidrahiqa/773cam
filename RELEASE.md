# 📸 MirrorCam v1.0.1

Desktop camera application for Windows built with Electron + React + TypeScript.

## 🎉 Release Notes

### v1.0.1 (Latest)

- 🐛 **Fixed**: Black screen on launch (fixed path resolution issues).
- 📐 **Improved**: Lowered minimum window size limit (down to 300x225).
- ⚡ **Optimized**: Smoother startup performance.

### v1.0.0 (Initial)

- 🎥 **Live Camera Stream** - Real-time webcam with mirror mode
- 📸 **Snapshot** - Save photos instantly to Downloads
- 📌 **Always On Top** - Pin window above all applications
- ➖ **Minimize Window** - Standard Windows minimize functionality
- 🎨 **Premium Dark UI** - Modern glassmorphism design
- ⚡ **Lightweight** - Optimized performance

### What's New in v1.0.0

- Initial release
- Full camera support with WebRTC
- Electron-based desktop application
- Windows 11 optimized

## 📥 Installation

### Option 1: Download Release

1. Download `MirrorCam-v1.0.0-Windows-x64.zip`
2. Extract to your preferred location
3. Run `MirrorCam.exe`
4. Allow camera permissions when prompted

### Option 2: Build from Source

```powershell
# Clone repository
git clone https://github.com/YOUR_USERNAME/MirrorCam.git
cd MirrorCam

# Install dependencies
npm install

# Run development mode
npm run dev          # Terminal 1
npm run electron:dev # Terminal 2

# Build production
npm run build
npx electron-builder --win --x64
```

## 🎮 Usage

1. **Launch App** - Double-click `MirrorCam.exe`
2. **Allow Camera** - Grant camera permissions
3. **Use Controls** (hover over bottom):
   - 📸 **Snapshot** - Click camera icon
   - 📌 **Always On Top** - Click pin icon (purple when active)
   - ➖ **Minimize** - Click minimize icon

## 💻 System Requirements

- **OS**: Windows 11 or Windows 10
- **Webcam**: Required
- **Storage**: ~200MB
- **RAM**: 200MB

## 🛠️ Tech Stack

- Electron 33.2.1
- React 19
- TypeScript 5.9
- Vite 7.3
- CSS3 (Glassmorphism)

## 📄 License

MIT License - Feel free to use and modify!

## 🐛 Known Issues

- First launch may take a few seconds
- Camera permission must be granted

## 📞 Support

- Report issues: [GitHub Issues](https://github.com/YOUR_USERNAME/MirrorCam/issues)
- Feature requests welcome!

---

**Made with ❤️ using Electron + React**
