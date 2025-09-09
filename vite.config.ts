import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    fs: {
      allow: ['..']
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          govuk: ['govuk-frontend', 'govuk-react'],
          styled: ['styled-components']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['styled-components']
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // Use modern SASS API
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'slash-div'],
        quietDeps: true,
        additionalData: `
          $govuk-fonts-path: "";
          $govuk-fonts-version: "";
          $govuk-fonts-url: "";
        `
      }
    }
  },
  define: {
    // Suppress styled-components warnings in development
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  assetsInclude: ['**/*.woff', '**/*.woff2'],
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
