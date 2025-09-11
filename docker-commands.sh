#!/bin/bash

# Docker commands for React A11y Test application
# Usage: ./docker-commands.sh [command]

case "$1" in
  "build")
    echo "🔨 Building Docker image..."
    docker build -t react-a11y-test .
    ;;
  "up")
    echo "🚀 Starting application with Docker Compose..."
    docker-compose up
    ;;
  "up-d")
    echo "🚀 Starting application in background..."
    docker-compose up -d
    ;;
  "down")
    echo "🛑 Stopping containers..."
    docker-compose down
    ;;
  "dev")
    echo "🛠️ Starting development environment..."
    docker-compose --profile dev up
    ;;
  "logs")
    echo "📋 Showing container logs..."
    docker-compose logs -f
    ;;
  "clean")
    echo "🧹 Cleaning up Docker resources..."
    docker-compose down
    docker rmi react-a11y-test 2>/dev/null || true
    docker system prune -f
    ;;
  *)
    echo "React A11y Test - Docker Commands"
    echo "================================="
    echo ""
    echo "Available commands:"
    echo "  build    - Build the Docker image"
    echo "  up       - Start the application"
    echo "  up-d     - Start the application in background"
    echo "  down     - Stop containers"
    echo "  dev      - Start development environment"
    echo "  logs     - Show container logs"
    echo "  clean    - Clean up Docker resources"
    echo ""
    echo "Usage: ./docker-commands.sh [command]"
    echo ""
    echo "Examples:"
    echo "  ./docker-commands.sh build"
    echo "  ./docker-commands.sh up"
    echo "  ./docker-commands.sh down"
    ;;
esac
