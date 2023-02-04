/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {},
			fontFamily: {
				head: ['Oswald', 'san-serif'],
				body: ['Karla', 'san-serif'],
			},
		},
	},
	plugins: [],
}
