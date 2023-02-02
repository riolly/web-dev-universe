/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				accent: "rgb(124,58,237)",
			},
			backgroundImage: {
				"linear-accent":
					"linear-gradient(45deg,theme(colors.accent),#da62c4 30%,white 60%)",
			},
		},
	},
	plugins: [],
};
