# React A11y Test - Docker Commands
# Usage: make [command]

.PHONY: build up down dev logs clean help

# Default target
help:
	@echo "React A11y Test - Docker Commands"
	@echo "================================="
	@echo ""
	@echo "Available commands:"
	@echo "  make build  - Build Docker image"
	@echo "  make up     - Start application"
	@echo "  make down   - Stop containers"
	@echo "  make dev    - Start development environment"
	@echo "  make logs   - Show container logs"
	@echo "  make clean  - Clean up Docker resources"
	@echo ""

# Build the Docker image
build:
	@echo "🔨 Building Docker image..."
	docker build -t react-a11y-test .

# Start the application
up:
	@echo "🚀 Starting application..."
	docker-compose up

# Stop containers
down:
	@echo "🛑 Stopping containers..."
	docker-compose down

# Start development environment
dev:
	@echo "🛠️ Starting development environment..."
	docker-compose --profile dev up

# Show logs
logs:
	@echo "📋 Showing container logs..."
	docker-compose logs -f

# Clean up Docker resources
clean:
	@echo "🧹 Cleaning up Docker resources..."
	docker-compose down
	docker rmi react-a11y-test 2>/dev/null || true
	docker system prune -f
