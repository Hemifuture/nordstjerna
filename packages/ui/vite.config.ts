import path from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    lib: {
      entry: 'src/index.tsx',
      formats: ['es', 'cjs'],
      fileName: (format) => `ui.${format}.js`,
    },
  },
  resolve: {
    alias: {
      '@nordstjerna/style': path.resolve(__dirname, '../style/src/style.css')
    }
  }
})