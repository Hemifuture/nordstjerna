import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
    build: {
        // lib: {
        //     entry: path.resolve(__dirname, "src/main.ts"),
        //     name: "Nordstjerna",
        //     fileName: (format) => `nordstjerna.${format}.js`,
        // },
        outDir: 'dist',
        emptyOutDir: true,
        // 添加CSS输出配置
        cssCodeSplit: false,
        rollupOptions: {
            input: path.resolve(__dirname, "src/main.ts"),
            output: {
                assetFileNames: 'style.css'
            }
        }
    },
});