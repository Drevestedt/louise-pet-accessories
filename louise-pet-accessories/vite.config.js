import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import singleFile from 'vite-plugin-singlefile';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), singleFile()],
  base: '/louise-pet-accessories/',
  build: {
    assetsInlineLimit: 100000000,
  }
})
