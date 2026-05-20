import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins:[
    react(), 
    tailwindcss(),
    ViteImageOptimizer({
      webp: {
        quality: 100, 
      },
      jpeg: {
        quality: 100,
      }
    })
  ],
  build: {
    
    assetsInlineLimit: 4096, 
    rollupOptions: {
      output: {
       
        manualChunks: {
          vendor:['react', 'react-dom'], 
        },
      },
    },
  },
})