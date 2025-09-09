#!/bin/bash

echo "🧹 Cleaning up development environment..."

# Stop any running Vite processes
echo "Stopping development server..."
pkill -f "vite" 2>/dev/null || echo "No Vite processes found"

# Clear Vite cache
echo "Clearing Vite cache..."
rm -rf node_modules/.vite 2>/dev/null || echo "No Vite cache found"

# Clear browser cache (optional)
echo "💡 Tip: Clear your browser cache (Cmd+Shift+R) for a fresh start"

echo ""
echo "🚀 Starting clean development server..."
echo ""

npm run dev
