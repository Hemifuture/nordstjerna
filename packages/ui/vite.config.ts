import { defineConfig } from "vite";
import path from "path";
// Vite plugin 'vite:dts' is not compatible with Farm for now. Because it uses viteConfig.build['lib'] which is not supported by Farm
import dts from "vite-plugin-dts";
import UnoCSS from "unocss/vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [
    UnoCSS(),
    solidPlugin({
      // hot: false,
    }),
    dts(),
  ],
  //   compilation: {
  //     input: {
  //       index: "src/index.tsx",
  //     },
  //   },

  // ],
  build: {
    // https://rollupjs.org/configuration-options/#watch
    // watch: {
    //   exclude: 'node_modules/**',
    //   include: 'src/**',
    // },
    rollupOptions: {},
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "@nordstjerna/ui",
    },
    outDir: "dist",
    target: "esnext",
    minify: true,
    sourcemap: true,
  },
});
