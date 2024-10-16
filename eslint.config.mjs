import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import _import from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [
	{ ignores: ['**/coverage/**/*', '**/dist/**/*', '**/node_modules/**/*', '**/docs/**/*'], },
	...fixupConfigRules(compat.extends(
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'prettier',
	)),
	{
		plugins: {
			'@typescript-eslint': fixupPluginRules(typescriptEslint),
			import: fixupPluginRules(_import),
			prettier,
		},

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 5,
			sourceType: 'script',

			parserOptions: { warnOnUnsupportedTypeScriptVersion: false, },
		},

		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],

		rules: {
			indent: ['error', 'tab'],
			quotes: ['error', 'single'],

			'no-tabs': ['error', { allowIndentationTabs: true, }],

			'max-len': ['error', { code: 160, }],

			'no-console': 'error',
			curly: 'error',
			'comma-dangle': 0,

			'array-bracket-newline': [
				'error',
				{
					multiline: true,
					minItems: 5,
				}
			],

			'array-element-newline': [
				'error',
				{
					multiline: true,
					minItems: 5,
				}
			],

			'object-curly-newline': [
				'error',
				{
					ObjectExpression: {
						multiline: true,
						minProperties: 3,
					},

					ObjectPattern: {
						multiline: true,
						minProperties: 3,
					},

					ImportDeclaration: {
						multiline: true,
						minProperties: 5,
					},

					ExportDeclaration: {
						multiline: true,
						minProperties: 5,
					},
				}
			],

			'object-curly-spacing': ['error', 'always'],
			'@typescript-eslint/no-explicit-any': 'error',

			'import/order': [
				2,
				{
					alphabetize: { order: 'asc', },

					groups: [['builtin', 'external'], ['internal', 'unknown'], ['parent', 'sibling', 'index'],],

					'newlines-between': 'always',
				}
			],
		},
	}
];