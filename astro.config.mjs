import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import swup from "@swup/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://www.riolly.dev",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    prefetch(),
    mdx(),
    solidJs(),
    sitemap(),
    robotsTxt(),
    swup({ theme: "fade", smoothScrolling: true }),
  ],
  experimental: {
    assets: true,
  },
});
