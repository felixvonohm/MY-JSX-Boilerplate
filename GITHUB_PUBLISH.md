# Publishing to GitHub

## Project Summary

**EPUB Viewer** - A modern desktop application built with:
- ⚛️ **React** (default framework)
- 💚 **Vue 3** (alternative framework)
- 🔥 **Svelte** (alternative framework)
- ⚡ **Vite** (fast build tool)
- 🖥️ **Electron** (desktop app)
- 📦 **Electron Builder** (cross-platform installers)

## Features

✅ Multi-framework support (React, Vue, Svelte)
✅ Hot Module Replacement (HMR) during development
✅ Cross-platform installers (Windows, macOS, Linux)
✅ NSIS installer for Windows with custom directory selection
✅ Modern UI with gradient design
✅ Security with context isolation and preload scripts
✅ Framework showcase component to demo all three frameworks

## Quick Start

```bash
# Install dependencies
npm install

# Development
npm run electron-dev          # React (default)
npm run electron-dev:vue      # Vue
npm run electron-dev:svelte   # Svelte

# Build installers
npm run electron-build        # React
npm run electron-build:vue    # Vue
npm run electron-build:svelte # Svelte
```

## Project Structure

```
.
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # React component
│   ├── FrameworkShowcase.jsx # Multi-framework demo
│   ├── vue/
│   │   ├── main.js           # Vue entry point
│   │   └── App.vue           # Vue component
│   └── svelte/
│       ├── main.js           # Svelte entry point
│       └── App.svelte        # Svelte component
├── electron/
│   ├── main.cjs              # Electron main process
│   ├── preload.cjs           # Preload script
│   └── index.cjs             # CommonJS entry point
├── vite.config.js            # React Vite config
├── vite.vue.config.js        # Vue Vite config
├── vite.svelte.config.js     # Svelte Vite config
├── package.json              # Dependencies & scripts
├── index.html                # HTML template
├── FRAMEWORKS.md             # Framework switching guide
└── README.md                 # Project documentation
```

## Available Scripts

### Development
- `npm run dev` - Start Vite dev server (React)
- `npm run dev:vue` - Start Vite dev server (Vue)
- `npm run dev:svelte` - Start Vite dev server (Svelte)
- `npm run electron-dev` - Run Electron with React
- `npm run electron-dev:vue` - Run Electron with Vue
- `npm run electron-dev:svelte` - Run Electron with Svelte

### Building
- `npm run build` - Build React app
- `npm run build:vue` - Build Vue app
- `npm run build:svelte` - Build Svelte app
- `npm run electron-build` - Build React installer
- `npm run electron-build:vue` - Build Vue installer
- `npm run electron-build:svelte` - Build Svelte installer
- `npm run electron-build:win` - Build Windows installer
- `npm run electron-build:mac` - Build macOS installer
- `npm run electron-build:linux` - Build Linux installer
- `npm run electron-build:all` - Build all platform installers

## Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm run electron-dev` to start development
4. Build installers with `npm run electron-build`

## Framework Comparison

| Feature | React | Vue | Svelte |
|---------|-------|-----|--------|
| Learning Curve | Moderate | Easy | Easy |
| Bundle Size | Medium | Small | Smallest |
| Performance | Excellent | Excellent | Excellent |
| Community | Largest | Large | Growing |
| Hot Reload | ✅ | ✅ | ✅ |

## Configuration

### Electron Builder (Windows)
- NSIS installer with custom directory selection
- Portable executable
- Desktop and Start Menu shortcuts

### Electron Builder (macOS)
- DMG installer
- ZIP archive

### Electron Builder (Linux)
- AppImage
- DEB package

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **In another terminal, start Electron**: `npm run electron`
3. **Edit files** in `src/` - changes auto-reload
4. **Switch frameworks** by editing `index.html` or using framework-specific commands

## Troubleshooting

**Port already in use?**
- Vite will automatically use the next available port

**Electron window not opening?**
- Make sure dev server is running first
- Check that `http://localhost:5173` is accessible

**Module not found?**
- Run `npm install` again
- Clear `node_modules` and reinstall if needed

## License

MIT

## Author

Created as a boilerplate for multi-framework Electron desktop applications.

---

For more details, see:
- `README.md` - Project overview
- `FRAMEWORKS.md` - Framework switching guide
