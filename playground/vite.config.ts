import path from 'path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      '@nordstjerna/ui': path.resolve(__dirname, '../packages/ui/src/index.tsx'),
      '@nordstjerna/style': path.resolve(__dirname, '../packages/style/src/style.css'),
    },
  },
})
