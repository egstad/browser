# Browser

A minimal, chrome-less web browser built with Electron.

## Features

- **Minimal Interface**: Clean, distraction-free browsing
- **Spotlight-style URL Bar**: Press `Cmd+L` to show/hide the address bar
- **Keyboard Navigation**: `Cmd+Left/Right` for back/forward
- **Full-screen Experience**: No visible chrome or controls by default

## Download

Download the latest version for macOS:

- **Intel Macs**: [Download DMG](https://github.com/egstad/browser/releases/latest)
- **Apple Silicon**: [Download DMG](https://github.com/egstad/browser/releases/latest)

> Click the appropriate DMG file for your Mac architecture from the latest release

[View all releases](https://github.com/egstad/browser/releases)

## Keyboard Shortcuts

- `Cmd+L` - Show/hide URL bar
- `Cmd+Left` - Go back
- `Cmd+Right` - Go forward
- `Escape` - Hide URL bar

## Development

### Getting Started

```bash
# Install dependencies
npm install

# Run in development mode with hot reload
npm run dev

# Build for distribution
npm run dist
```

### Creating Releases

This project uses automated releases via GitHub Actions. Here's how to create and maintain versions:

#### 1. Update Version

First, update the version in `package.json`:

```bash
# For patch releases (1.0.0 -> 1.0.1)
npm version patch

# For minor releases (1.0.0 -> 1.1.0)
npm version minor

# For major releases (1.0.0 -> 2.0.0)
npm version major
```

This automatically updates `package.json` and creates a git commit.

#### 2. Create and Push Tag

```bash
# Push the version commit and tag
git push origin main --tags
```

#### 3. Automated Release

Once you push a tag (like `v1.0.1`), GitHub Actions will automatically:
- Build the app for both Intel and Apple Silicon
- Create DMG and ZIP files
- Create a GitHub release with download links
- Generate release notes from commits

#### Manual Release (if needed)

```bash
# Build and test locally first
npm run dist

# Create tag manually
git tag v1.0.1
git push origin v1.0.1
```

### Version Strategy

- **Patch** (1.0.x): Bug fixes, minor improvements
- **Minor** (1.x.0): New features, UI changes
- **Major** (x.0.0): Breaking changes, major rewrites

### Maintenance

- Check [GitHub Actions](../../actions) for build status
- Monitor [Issues](../../issues) for bug reports
- Update dependencies regularly with `npm update`
- Test builds locally before releasing

## License

MIT