import globals from 'globals';

import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config} */
export default {
  files: ['**/*.{js,mjs,cjs,ts}'], // Specify the files ESLint should target
  languageOptions: {
    parser: tsParser,
    globals: {
      ...globals.node,
      process: 'readonly',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // Disable formatting rules conflicting with Prettier
  ],
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {}, // Resolve TypeScript paths
    },
  },
  rules: {
    'no-unused-vars': 'error',
    'no-unused-expressions': 'error',
    'prefer-const': 'error',
    'no-console': 'warn',
    'no-undef': 'error',
  },
  ignorePatterns: ['node_modules', 'dist'], // Ignore unnecessary folders
};
