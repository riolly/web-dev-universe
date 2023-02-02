module.exports = {
	root: true,
	env: {
		node: true,
		es2022: true,
		browser: true,
	},
	extends: ['eslint:recommended', 'plugin:astro/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	rules: {},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			rules: {
				'prettier/prettier': 'off',
				'no-unused-vars': [
					'error',
					{argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_'},
				],
			},
		},
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'no-unused-vars': [
					'error',
					{argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_'},
				],
			},
		},
	],
}
