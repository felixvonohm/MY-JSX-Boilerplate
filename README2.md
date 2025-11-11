# EPUB Viewer - Electron + Vite + React

A modern desktop application for viewing EPUB files, built with Electron, Vite, and React.

## Features

- ⚡ Fast development with Vite
- ⚛️ React for UI components
- 🖥️ Cross-platform desktop app with Electron
- 📦 Automated installer generation with electron-builder
- 🎨 Modern UI with gradient design

## Prerequisites

- Node.js 16+ and npm

## Installation

```bash
npm install
```

## Development

Start the development server with hot module replacement:

```bash
npm run electron-dev
```

Or run Vite dev server and Electron separately:

```bash
# Terminal 1
npm run dev

# Terminal 2
npm run electron
```

## Building

### Build for current platform

```bash
npm run electron-build
```

### Build for specific platform

```bash
npm run electron-build:win    # Windows
npm run electron-build:mac    # macOS
npm run electron-build:linux  # Linux
```

### Build for all platforms

```bash
npm run electron-build:all
```

## Project Structure

```
.
├── src/                    # React source files
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main App component
│   ├── App.css            # App styles
│   └── index.css          # Global styles
├── electron/              # Electron main process
│   ├── main.js            # Main process entry
│   └── preload.js         # Preload script
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── package.json           # Project metadata & dependencies
└── README.md              # This file
```

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build React app
- `npm run preview` - Preview production build
- `npm run electron` - Run Electron app
- `npm run electron-dev` - Run Electron with hot reload
- `npm run electron-build` - Build and create installer
- `npm run electron-build:win` - Build Windows installer
- `npm run electron-build:mac` - Build macOS installer
- `npm run electron-build:linux` - Build Linux installer
- `npm run electron-build:all` - Build all platform installers

## Configuration

### Electron Builder

The installer configuration is in `package.json` under the `build` key:

- **NSIS (Windows)**: One-click installer with custom directory selection
- **DMG (macOS)**: Disk image installer
- **AppImage & DEB (Linux)**: AppImage and Debian package

## License

MIT
