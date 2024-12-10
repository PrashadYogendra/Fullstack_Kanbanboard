import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Correct build output folder
  },
});
