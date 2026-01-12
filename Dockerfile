# Multi-stage build for Next.js application
# Stage 1: Build the Next.js application
FROM node:24-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including dev dependencies for build)
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production server
FROM node:24-alpine AS production

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create app user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production && npm cache clean --force

# Copy built application from builder stage
# Next.js standalone output includes node_modules and server.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Copy startup script to ensure proper binding
COPY --chown=nextjs:nodejs start-server.js ./start-server.js

# Switch to non-root user
USER nextjs

# Expose port (Render.com will set PORT via environment variable)
EXPOSE 3000

# Set default port (Render.com will override PORT via environment variable)
ENV PORT=3000
# Explicitly set HOSTNAME to bind to all interfaces (required for Render.com)
ENV HOSTNAME=0.0.0.0

# Health check - use /health endpoint (matches render.yaml)
# Health check runs inside container, so use localhost
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD node -e "require('http').get('http://localhost:' + (process.env.PORT || 3000) + '/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start the Next.js application using our wrapper script
# This ensures HOSTNAME=0.0.0.0 is set before server.js loads
CMD ["node", "start-server.js"]
