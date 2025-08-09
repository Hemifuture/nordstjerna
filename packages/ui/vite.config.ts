import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
  '@nordstjerna-style-components': path.resolve(__dirname, '../style/src/css/components'),
  '@nordstjerna-style-css': path.resolve(__dirname, '../style/src/css')
    }
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'NordstjernaUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `ui.${format === 'es' ? 'esm' : format}.js`
    },
    outDir: 'dist',
    rollupOptions: {
  external: ['lit'],
      output: {
        globals: {
          'lit': 'Lit',
          '@nordstjerna/style': 'NordstjernaStyle'
        }
      }
    }
  }
});