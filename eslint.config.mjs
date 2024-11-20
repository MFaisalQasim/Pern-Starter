import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Example: enforce single quotes
      quotes: ['error', 'single'],
      // Example: disallow `console.log`
      'no-console': 'warn',
    },
  },
  prettierConfig, // Disables conflicting rules
  {
    plugins: {
      prettier: prettierPlugin, // Adds Prettier plugin
    },
    rules: {
      'prettier/prettier': 'error', // Run Prettier as an ESLint rule
    },
  },
];
