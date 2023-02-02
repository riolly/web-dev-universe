/** @type {import('prettier').Config} */
module.exports = {
	arrowParens: 'always',
	printWidth: 100,
	trailingComma: 'es5',
	useTabs: true,
	tabWidth: 2,
	semi: false,
	singleQuote: true,
	bracketSpacing: false,
	jsxSingleQuote: true,
	plugins: [
		require.resolve('prettier-plugin-astro'),
		require.resolve('prettier-plugin-tailwindcss'), // MUST come last
	],
	pluginSearchDirs: false,
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	astroAllowShorthand: false,
	tailwindConfig: './tailwind.config.cjs',
}
