#!/bin/bash

# Global Docker commands for React A11y Test
# Place this in your PATH (e.g., /usr/local/bin) and name it 'docker-up', 'docker-down', etc.

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Change to the project directory
cd "$SCRIPT_DIR" || exit 1

# Run the appropriate docker-compose command
case "$(basename "$0")" in
  "docker-up")
    docker-compose up
    ;;
  "docker-down")
    docker-compose down
    ;;
  "docker-build")
    docker build -t react-a11y-test .
    ;;
  "docker-dev")
    docker-compose --profile dev up
    ;;
  "docker-logs")
    docker-compose logs -f
    ;;
  *)
    echo "Unknown command: $(basename "$0")"
    echo "Available commands: docker-up, docker-down, docker-build, docker-dev, docker-logs"
    exit 1
    ;;
esac
