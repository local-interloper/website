import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://local.interloper.me",
  integrations: [tailwind({
    applyBaseStyles: false
  }), mdx(), react(), icon(), sitemap()],
  output: "server",
  adapter: vercel()
});