import { defineConfig } from '@farmfe/core';
import path from 'path';
// Vite plugin 'vite:dts' is not compatible with Farm for now. Because it uses viteConfig.build['lib'] which is not supported by Farm
// import dts from 'vite-plugin-dts';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  vitePlugins: [
    solidPlugin({
      hot: false,
    })
  ],
  compilation: {
    input: {
      index: "src/index.tsx",
    },
  },

  // ],
  // build: {
  //   // https://rollupjs.org/configuration-options/#watch
  //   // watch: {
  //   //   exclude: 'node_modules/**',
  //   //   include: 'src/**',
  //   // },
  //   lib: {
  //     entry: path.resolve(__dirname, 'src/index.tsx'),
  //     name: 'nordstjerna',
  //   },
  //   outDir: 'dist',
  //   target: 'esnext',
  //   minify: true,
  //   sourcemap: true,
  // },
});