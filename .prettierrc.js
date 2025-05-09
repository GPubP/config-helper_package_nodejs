module.exports = {
	printWidth: 100,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'es5',
	useTabs: true,
	endOfLine: 'auto',
	overrides: [
		{
			files: ['**/*.json'],
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
};
