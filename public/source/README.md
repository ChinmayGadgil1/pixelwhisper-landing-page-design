# PixelWhisper Installers

This directory contains the Windows installer for PixelWhisper.

## Windows

- **pixelwhisper-1.0.0-windows.exe** - Windows installer (x64)
- **pixelwhisper-1.0.0-windows-portable.zip** - Portable version (no installation required)

## Installation

### From Binary
Download the appropriate installer for your platform and run it.

### From PyPI
```bash
pip install pixelwhisper
```

### From Source
```bash
git clone https://github.com/yourusername/pixelwhisper.git
cd pixelwhisper
pip install -e .
```

## System Requirements

- **Python:** 3.8 or higher
- **RAM:** 512MB minimum (1GB recommended)
- **Disk Space:** 100MB for installation

## Getting Started

```bash
pixelwhisper encode --image photo.png --message "secret" --output hidden.png
pixelwhisper decode --image hidden.png --password "secret"
```

## Documentation

For detailed usage instructions and API documentation, visit: https://pixelwhisper.dev/docs

## Support

For issues, feature requests, or contributions, please visit: https://github.com/yourusername/pixelwhisper
