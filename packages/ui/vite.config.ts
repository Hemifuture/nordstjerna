import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      outDir: 'dist/types',
      include: ['src/**/*'],
      exclude: ['**/*.test.ts', '**/*.spec.ts'],
      insertTypesEntry: true,
      copyDtsFiles: true,
      rollupTypes: true
    })
  ],
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
      formats: ['es'],
      fileName: () => 'index.js'
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