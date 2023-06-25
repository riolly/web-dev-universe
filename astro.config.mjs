import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import image from '@astrojs/image';

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.riolly.dev',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), solidJs(), mdx()]
});