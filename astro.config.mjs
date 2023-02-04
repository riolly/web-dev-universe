import {defineConfig} from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
	site: 'https://riolly.vercel.app',
	integrations: [
		tailwind({config: {applyBaseStyles: false}}),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
	],
})
