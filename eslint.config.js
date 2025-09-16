import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  // Ignore the 'dist' directory, which contains production build files.
  globalIgnores(['dist']),
  {
    // Apply these rules to all JavaScript and JSX files.
    files: ['**/*.{js,jsx}'],
    // Extend the recommended ESLint, React Hooks, and React Refresh configurations.
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      // Set the ECMAScript version to 2020.
      ecmaVersion: 2020,
      // Use browser global variables.
      globals: globals.browser,
      parserOptions: {
        // Use the latest ECMAScript version.
        ecmaVersion: 'latest',
        // Enable JSX syntax.
        ecmaFeatures: { jsx: true },
        // Use ES modules.
        sourceType: 'module',
      },
    },
    rules: {
      // Throw an error for unused variables, but ignore variables starting with an uppercase letter or underscore.
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]);