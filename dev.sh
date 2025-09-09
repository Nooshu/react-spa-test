#!/bin/bash

echo "🚀 Starting React A11y Test Development Server..."
echo ""

# Check if port 3000 is available
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Port 3000 is in use. Vite will automatically find another port."
else
    echo "✅ Port 3000 is available."
fi

echo ""
echo "🌐 Your application will be available at:"
echo "   http://localhost:3000 (or next available port)"
echo ""
echo "📱 Pages to explore:"
echo "   • Home - Overview and performance metrics"
echo "   • Forms - Comprehensive form examples"
echo "   • Components - GOV.UK component gallery"
echo "   • Performance - Performance testing tools"
echo ""
echo "🔧 Available commands:"
echo "   • Ctrl+C to stop the server"
echo "   • 'h' + Enter for Vite help"
echo "   • 'r' to restart the server"
echo ""

npm run dev
