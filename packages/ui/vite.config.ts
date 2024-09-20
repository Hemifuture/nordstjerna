import { defineConfig } from "vite";
import path from "path";
// Vite plugin 'vite:dts' is not compatible with Farm for now. Because it uses viteConfig.build['lib'] which is not supported by Farm
import dts from "vite-plugin-dts";
import UnoCSS from "unocss/vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  base: "/nordstjerna/",
  plugins: [
    UnoCSS(),
    solidPlugin({
      // hot: false,
    }),
    dts({
      outDir: "dist/types",
      insertTypesEntry: true,
    }),
  ],
  //   compilation: {
  //     input: {
  //       index: "src/index.tsx",
  //     },
  //   },

  // ],
  build: {
    rollupOptions: {
      output: [
        {
          format: 'esm',
          dir: 'dist/esm',
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
        },
      ],
      external: ["@nordstjerna/style"],
    },
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
