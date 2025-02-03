import js from '@eslint/js';
import react from 'eslint-plugin-react';
import typescript from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import parser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',  // React 버전 자동 감지
      },
    },
    env: {
      browser: true,  // 브라우저 환경
      es2021: true,
    },
    plugins: {
      react: react,
      '@typescript-eslint': typescript,
      prettier: prettier,
    },
    rules: {
      ...js.configs.recommended.rules,  // ESLint 권장 규칙
      ...typescript.configs.recommended.rules,  // TypeScript 권장 규칙
      ...react.configs.recommended.rules,  // React 권장 규칙
      ...prettier.configs.recommended.rules,  // Prettier 충돌 방지 설정
      'prettier/prettier': 'error',  // Prettier 포맷팅 오류를 ESLint 오류로 간주
      'react/react-in-jsx-scope': 'off',  // React 17 이상에서는 필요 없음
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
];