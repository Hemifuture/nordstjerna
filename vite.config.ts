import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [solid(), UnoCSS()],
  build: {
    lib: {
      entry: "src/lib/index.ts",
      name: "solidComponentLibrary",
      fileName: (format) => `solid-component-library.${format}.js`,
    },
  },
});
