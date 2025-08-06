import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'NordstjernaUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `ui.${format === 'es' ? 'esm' : format}.js`
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['lit', '@nordstjerna/style'],
      output: {
        globals: {
          'lit': 'Lit',
          '@nordstjerna/style': 'NordstjernaStyle'
        }
      }
    }
  }
});