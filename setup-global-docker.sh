#!/bin/bash

# Setup script for global Docker commands
# This will create symlinks in /usr/local/bin for global access

echo "🚀 Setting up global Docker commands for React A11y Test..."

# Get the current directory
CURRENT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Create symlinks for global access
echo "📁 Creating global symlinks..."

# Check if /usr/local/bin exists and is writable
if [ -w /usr/local/bin ]; then
    BIN_DIR="/usr/local/bin"
elif [ -w "$HOME/.local/bin" ]; then
    BIN_DIR="$HOME/.local/bin"
    mkdir -p "$BIN_DIR"
    echo "📝 Add $BIN_DIR to your PATH in ~/.zshrc:"
    echo "   export PATH=\"\$PATH:$BIN_DIR\""
else
    echo "❌ Cannot write to /usr/local/bin or ~/.local/bin"
    echo "   Please run with sudo or choose a different location"
    exit 1
fi

# Create symlinks
ln -sf "$CURRENT_DIR/docker-global.sh" "$BIN_DIR/docker-up"
ln -sf "$CURRENT_DIR/docker-global.sh" "$BIN_DIR/docker-down"
ln -sf "$CURRENT_DIR/docker-global.sh" "$BIN_DIR/docker-build"
ln -sf "$CURRENT_DIR/docker-global.sh" "$BIN_DIR/docker-dev"
ln -sf "$CURRENT_DIR/docker-global.sh" "$BIN_DIR/docker-logs"

echo "✅ Global Docker commands installed!"
echo ""
echo "You can now use these commands from anywhere:"
echo "  docker-up     - Start the application"
echo "  docker-down   - Stop containers"
echo "  docker-build  - Build Docker image"
echo "  docker-dev    - Start development environment"
echo "  docker-logs   - Show container logs"
echo ""
echo "Note: These commands will work from any directory,"
echo "but they will always operate on the React A11y Test project."
