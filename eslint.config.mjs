// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  react.configs.flat["jsx-runtime"],
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
);