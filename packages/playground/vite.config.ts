import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import UnoCSS from "unocss/vite";
import path from "path";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  base: "/nordstjerna/",
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    UnoCSS(),
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "~": "/src",
      "@nordstjerna/ui": path.resolve(__dirname, "../../packages/ui/src/index.tsx"),
    },
  },
});

