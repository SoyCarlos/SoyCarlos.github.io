import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import react from "@astrojs/react";
import pagefind from "astro-pagefind";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react(), pagefind(), sitemap()],
  adapter: node({
    mode: "standalone"
  }),
  renderers: ["@astrojs/renderer-react"],
  site: 'https://www.carlos.soy/',
  server: {
    host: '0.0.0.0'
  },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["es", "en",],
    defaultLocale: "en",
    fallback: {
      es: "en",
    },
    routing: {
      fallbackType: "rewrite"
    }
  },
});