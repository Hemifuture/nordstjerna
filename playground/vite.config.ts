import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/nordstjerna/",
  resolve: {
    alias: {
      "@nordstjerna/ui": path.resolve(
        __dirname,
        "../packages/ui/src/index.ts"
      ),
      "@nordstjerna/style": path.resolve(
        __dirname,
        "../packages/style/src/style.css"
      ),
    },
  },
});
