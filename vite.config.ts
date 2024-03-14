import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  build: {
    lib: {
      entry: "src/lib/index.ts",
      name: "nordstjerna",
      fileName: (format) => `nordstjerna.${format}.js`,
    },
  },
});
