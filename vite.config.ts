import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Domains allowed to reach the dev/preview server (Vite Host check).
  // `.synergyflow.ru` matches rjx.synergyflow.ru and any future subdomain.
  server: {
    port: 5173,
    allowedHosts: ['.synergyflow.ru'],
  },
  preview: {
    allowedHosts: ['.synergyflow.ru'],
  },
  build: {
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          state: ['zustand'],
        },
      },
    },
  },
});
