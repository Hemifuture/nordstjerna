import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig(
  {
    integrations: [
      solidJs(),
      UnoCSS({
        injectReset: true,
      }),
    ],
  } // your configuration options here...
  // https://docs.astro.build/en/reference/configuration-reference/
  // root: "src/docs",
  // srcDir: "./src/docs",
);
