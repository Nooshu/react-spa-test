#!/usr/bin/env node
/**
 * Startup script for Next.js standalone mode on Render.com
 * Ensures the server binds to 0.0.0.0 and uses the PORT environment variable
 */

// Set HOSTNAME before loading server.js (Next.js reads this)
process.env.HOSTNAME = process.env.HOSTNAME || '0.0.0.0';
process.env.PORT = process.env.PORT || '3000';

// Log startup information
console.log('🚀 Starting Next.js server...');
console.log(`📍 HOSTNAME: ${process.env.HOSTNAME}`);
console.log(`🔌 PORT: ${process.env.PORT}`);
console.log(`🌍 NODE_ENV: ${process.env.NODE_ENV || 'development'}`);

// Load the Next.js standalone server.js
// It's in the same directory and should be executable
import('./server.js').catch((error) => {
  console.error('❌ Failed to start server:', error);
  console.error('Stack:', error.stack);
  process.exit(1);
});
