import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.CI || process.env.GITHUB_ACTIONS ? "/" : "/nordstjerna/",
  resolve: {
    alias: {
      "@nordstjerna/ui": path.resolve(
        __dirname,
        "../packages/ui/src/index.ts"
      ),
    },
  },
});
