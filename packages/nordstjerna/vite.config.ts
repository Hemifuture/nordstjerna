import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import solidPlugin from 'vite-plugin-solid'
export default defineConfig({
  plugins: [
    dts(),
    solidPlugin({
      hot: false,
    }),
  ],
  build: {
    // https://rollupjs.org/configuration-options/#watch
    // watch: {
    //   exclude: 'node_modules/**',
    //   include: 'src/**',
    // },
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'nordstjerna',
    },
    outDir: 'dist',
    target: 'esnext',
    minify: true,
    sourcemap: true,
  },
});