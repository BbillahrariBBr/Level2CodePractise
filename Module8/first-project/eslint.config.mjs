import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { readFileSync } from 'fs';
import globals from 'globals';
import { join } from 'path';

// Read ignore patterns from .eslintignore file
const ignoreFilePath = join(process.cwd(), '.eslintignore');
const ignorePatterns = readFileSync(ignoreFilePath, 'utf8')
  .split('\n')
  .filter(Boolean) // Remove empty lines
  .filter((line) => !line.startsWith('#')); // Remove comments

export default {
  ignores: ignorePatterns,
  files: ['**/*.ts'], // Lint only TypeScript files
  languageOptions: {
    globals: globals.node,
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  plugins: {
    '@typescript-eslint': tsPlugin, // Add TypeScript plugin
  },
  rules: {
    // Add ESLint recommended rules
    'no-unused-vars': 'error',
    'no-var': 'error', // Add rule to disallow usage of `var` keyword
    'no-unused-expressions': 'error',
    'prefer-const': 'error',
    'no-console': 'warn',
    'no-undef': 'error',
    // Add TypeScript recommended rules
    // "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    // "@typescript-eslint/no-unused-vars": "error",
  },
};
