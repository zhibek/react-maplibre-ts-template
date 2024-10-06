import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['dist/**', 'eslint.config.js', 'vite.config.ts'],
  },
  ...fixupConfigRules(compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
  )), {
    plugins: {
      react: fixupPluginRules(react),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: '.',
      },
    },

    settings: {
      react: {
        version: 'detect',  // Automatically detect the React version
      }
    },

    rules: {
      'eol-last': ['error', 'always'],
      'import/extensions': ['error', 'never', { 'json': 'always' }],
      'import/prefer-default-export': 'off',
      'indent': ['error', 2],
      'max-len': 'off',
      'no-console': 'off',
      'no-multi-spaces': 'off',
      'no-nested-ternary': 'off',
      'no-void': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': ['error', { 'functions': 'defaultArguments' }],
      'semi': ['error', 'always'],
    }
  }
];
