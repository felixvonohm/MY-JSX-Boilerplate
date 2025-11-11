# Framework Setup Guide

This project supports **React**, **Vue**, and **Svelte** with Electron and Vite. Switch between frameworks easily using the provided npm scripts.

## Project Structure

```
src/
├── main.jsx              # React entry point
├── App.jsx              # React component
├── App.css              # React styles
├── index.css            # React global styles
├── vue/
│   ├── main.js          # Vue entry point
│   ├── App.vue          # Vue component
│   └── index.css        # Vue global styles
└── svelte/
    ├── main.js          # Svelte entry point
    ├── App.svelte       # Svelte component
    └── index.css        # Svelte global styles
```

## Available Scripts

### React (Default)

```bash
# Development
npm run dev
npm run electron-dev

# Build
npm run build
npm run electron-build
npm run electron-build:win
npm run electron-build:mac
npm run electron-build:linux
```

### Vue

```bash
# Development
npm run dev:vue
npm run electron-dev:vue

# Build
npm run build:vue
npm run electron-build:vue
```

### Svelte

```bash
# Development
npm run dev:svelte
npm run electron-dev:svelte

# Build
npm run build:svelte
npm run electron-build:svelte
```

## Switching Frameworks

To switch the main framework for your Electron app:

### Option 1: Update `index.html`

Edit `index.html` to point to the desired framework's entry point:

```html
<!-- For React (default) -->
<script type="module" src="/src/main.jsx"></script>

<!-- For Vue -->
<script type="module" src="/src/vue/main.js"></script>

<!-- For Svelte -->
<script type="module" src="/src/svelte/main.js"></script>
```

### Option 2: Use Framework-Specific Commands

Use the framework-specific npm scripts which automatically use the correct Vite config:

```bash
npm run dev:vue          # Runs with Vue config
npm run dev:svelte       # Runs with Svelte config
npm run dev              # Runs with React config (default)
```

## Configuration Files

- **`vite.config.js`** - React configuration (default)
- **`vite.vue.config.js`** - Vue configuration
- **`vite.svelte.config.js`** - Svelte configuration

Each config uses its respective Vite plugin:
- React: `@vitejs/plugin-react`
- Vue: `@vitejs/plugin-vue`
- Svelte: `@sveltejs/vite-plugin-svelte`

## Installing Dependencies

After cloning, install all dependencies:

```bash
npm install
```

This installs:
- React, React-DOM
- Vue
- Svelte
- All Vite plugins
- Electron and Electron-Builder

## Development Workflow

### React Development

```bash
npm run electron-dev
```

This builds the React app in watch mode and launches Electron.

### Vue Development

```bash
npm run electron-dev:vue
```

This builds the Vue app in watch mode and launches Electron.

### Svelte Development

```bash
npm run electron-dev:svelte
```

This builds the Svelte app in watch mode and launches Electron.

## Building Installers

### For Current Platform

```bash
npm run electron-build          # React
npm run electron-build:vue      # Vue
npm run electron-build:svelte   # Svelte
```

### For Specific Platform

```bash
npm run electron-build:win      # Windows NSIS + Portable
npm run electron-build:mac      # macOS DMG
npm run electron-build:linux    # Linux AppImage + DEB
npm run electron-build:all      # All platforms
```

Installers will be created in the `release/` directory.

## Framework Comparison

| Feature | React | Vue | Svelte |
|---------|-------|-----|--------|
| Learning Curve | Moderate | Easy | Easy |
| Bundle Size | Medium | Small | Smallest |
| Performance | Excellent | Excellent | Excellent |
| Community | Largest | Large | Growing |
| Hot Reload | ✅ | ✅ | ✅ |
| TypeScript | ✅ | ✅ | ✅ |

## Tips

- Each framework has its own color scheme in the UI
- React uses purple gradient
- Vue uses green gradient
- Svelte uses orange/yellow gradient
- All frameworks support HMR (Hot Module Replacement) during development
- You can run multiple dev servers on different ports if needed

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port.

### Module Not Found

Make sure you've run `npm install` and all dependencies are installed.

### Electron Not Launching

Check that the Vite dev server is running and accessible at `http://localhost:5173`.

## Next Steps

1. Install dependencies: `npm install`
2. Choose your framework and run the dev command
3. Edit the framework-specific files in `src/react/`, `src/vue/`, or `src/svelte/`
4. Build installers when ready: `npm run electron-build`
