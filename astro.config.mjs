import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx(), react(), icon()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});