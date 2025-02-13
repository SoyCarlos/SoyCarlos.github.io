import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import pagefind from "astro-pagefind";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file"
  },
  integrations: [mdx(), react(), pagefind(), sitemap()],
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  renderers: ["@astrojs/renderer-react"],
  site: 'https://www.carlos.soy/',
  vite: {    
    plugins: [tailwindcss()],  
  },
});