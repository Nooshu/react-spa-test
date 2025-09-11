# Docker Deployment Guide

This guide covers deploying the React A11y Test application using Docker, both locally and on Render.com.

## Docker Setup Overview

The application now includes comprehensive Docker support with:

- **Multi-stage builds** for optimized production images
- **Development and production** Docker configurations
- **Security best practices** (non-root user, minimal base image)
- **Health checks** for monitoring
- **Docker Compose** for easy local development

## Files Added

- `Dockerfile` - Production Docker configuration
- `Dockerfile.dev` - Development Docker configuration  
- `docker-compose.yml` - Local development and production orchestration
- `.dockerignore` - Excludes unnecessary files from Docker context

## Local Development with Docker

### Option 1: Global Shell Aliases (Recommended)

Add these aliases to your `~/.zshrc` or `~/.bashrc`:

```bash
alias docker-up="docker-compose up"
alias docker-down="docker-compose down"
alias docker-build="docker build -t react-a11y-test ."
```

Then you can use "naked" commands from anywhere:

```bash
# Build the Docker image
docker-build

# Start the application
docker-up

# Stop containers
docker-down
```

### Option 2: Global Shell Functions

Add the functions from `docker-functions.sh` to your `~/.zshrc`:

```bash
source /path/to/react-a11y-test/docker-functions.sh
```

Then use the commands globally:

```bash
docker-up
docker-down
docker-build
docker-dev
docker-logs
```

### Option 3: Global Script Installation

Run the setup script to install global commands:

```bash
./setup-global-docker.sh
```

This creates symlinks in `/usr/local/bin` so you can use:

```bash
docker-up
docker-down
docker-build
docker-dev
docker-logs
```

### Option 4: Simple Docker Script

```bash
# Build the Docker image
./docker build

# Start the application
./docker up

# Stop containers
./docker down
```

### Option 2: Makefile Commands

```bash
# Build the Docker image
make build

# Start the application
make up

# Stop containers
make down

# Show all available commands
make help
```

### Option 3: Comprehensive Docker Script

```bash
# Build the Docker image
./docker-commands.sh build

# Start the application
./docker-commands.sh up

# Start in background
./docker-commands.sh up-d

# Stop containers
./docker-commands.sh down

# Show logs
./docker-commands.sh logs

# Clean up resources
./docker-commands.sh clean
```

### Option 4: NPM Scripts (Legacy)

```bash
# Build the Docker image
npm run docker:build

# Start the application
npm run docker:up

# Stop containers
npm run docker:stop
```

### Option 5: Direct Docker Commands

```bash
# Build and run manually
docker build -t react-a11y-test .
docker-compose up
```

## Render.com Deployment

### Option 1: Docker Deployment (Recommended)

1. **Use the Docker service** in `render.yaml`:
   ```yaml
   - type: web
     name: react-a11y-test-docker
     env: docker
     dockerfilePath: ./Dockerfile
   ```

2. **Deploy via Render Dashboard**:
   - Create new Web Service
   - Select "Docker" as environment
   - Render will automatically detect and use the Dockerfile

### Option 2: Node.js Native (Fallback)

The original Node.js deployment is still available as a fallback option in `render.yaml`.

## Docker Benefits for This Project

### 1. **Consistent Environment**
- Same Node.js version across all environments
- Identical dependency versions
- Reproducible builds

### 2. **Asset Management**
- GOV.UK Frontend assets properly bundled
- Font files correctly copied during build
- No external CDN dependencies

### 3. **Performance Monitoring**
- Built-in performance metrics collection
- Error tracking and alerting
- Health check endpoints

### 4. **Security**
- Non-root user execution
- Minimal attack surface with Alpine Linux
- Proper signal handling with dumb-init

## Docker Image Optimization

The multi-stage build provides:

- **Builder stage**: Installs all dependencies and builds the app
- **Production stage**: Only includes runtime dependencies and built assets
- **Size optimization**: Smaller final image size
- **Security**: No build tools in production image

## Health Checks

Both Docker configurations include health checks:

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"
```

## Environment Variables

### Production
- `NODE_ENV=production`
- `PORT=3000`

### Development  
- `NODE_ENV=development`
- `PORT=3000`

## Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Check Docker build logs
   docker build -t react-a11y-test . --no-cache
   ```

2. **Asset Loading Issues**
   ```bash
   # Verify GOV.UK assets are copied
   docker run --rm react-a11y-test ls -la /app/dist/assets/
   ```

3. **Port Conflicts**
   ```bash
   # Use different port
   docker run -p 3001:3000 react-a11y-test
   ```

### Debugging

```bash
# Run container interactively
docker run -it --rm react-a11y-test sh

# Check container logs
docker logs <container-id>

# Inspect running container
docker exec -it <container-id> sh
```

## Performance Considerations

- **Multi-stage builds** reduce final image size
- **Alpine Linux** provides minimal base image
- **Production dependencies only** in final stage
- **Asset optimization** during build process

## Security Features

- **Non-root user** execution
- **Minimal base image** (Alpine Linux)
- **Signal handling** with dumb-init
- **Health checks** for monitoring
- **No sensitive data** in image layers

## Migration from Node.js Deployment

If you're currently using the Node.js deployment on Render:

1. **Test Docker locally** first
2. **Create new Docker service** on Render
3. **Verify functionality** matches current deployment
4. **Switch traffic** to Docker service
5. **Remove old Node.js service** (optional)

## Next Steps

1. **Test locally**: `npm run docker:dev`
2. **Build production**: `npm run docker:build`
3. **Deploy to Render**: Use Docker service configuration
4. **Monitor performance**: Use built-in analytics dashboard

The Docker setup provides a more robust, consistent, and portable deployment solution while maintaining all the existing functionality of your React A11y Test application.
