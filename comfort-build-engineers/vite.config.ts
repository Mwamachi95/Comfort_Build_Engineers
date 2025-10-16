import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        // Only process images with specific query parameters
        // Hero images: aggressive optimization with multiple sizes
        if (url.searchParams.has('hero')) {
          return new URLSearchParams({
            format: 'webp;jpg',
            quality: '75',
            w: '1920;1280;768',
            as: 'picture'
          })
        }

        // Service images: medium optimization
        if (url.searchParams.has('service')) {
          return new URLSearchParams({
            format: 'webp;jpg',
            quality: '80',
            w: '1200;800;400',
            as: 'picture'
          })
        }

        // Project images: standard optimization
        if (url.searchParams.has('project')) {
          return new URLSearchParams({
            format: 'webp;jpg',
            quality: '80',
            w: '1600;1200;800;400',
            as: 'picture'
          })
        }

        // For images without query parameters, return empty params to skip processing
        return new URLSearchParams()
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-forms': ['react-hook-form', '@formspree/react', '@hookform/resolvers', 'zod'],
          'vendor-ui': ['@headlessui/react', '@heroicons/react']
        }
      }
    },
    chunkSizeWarningLimit: 500,
    minify: 'esbuild' // Using esbuild for faster builds (console statements will be kept but minimized)
  }
})
