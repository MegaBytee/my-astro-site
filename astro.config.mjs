// @ts-check

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://megabytee.com",
  integrations: [mdx(), sitemap(), preact()],

  vite: {
    plugins: [tailwindcss()],
  },
});
