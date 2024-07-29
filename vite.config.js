import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: [
      // Add this for `node_modules` resolution
      'src/**/*.jsx',
      'node_modules/**/*.jsx'
    ],
    exclude: [],
  },
  server: {
    mimeTypes: {
      // Ensure the server responds with the correct MIME type
      'jsx': 'application/javascript',
      'js': 'application/javascript',
    },
  },
});
