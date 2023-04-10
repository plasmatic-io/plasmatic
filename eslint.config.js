import js from '@eslint/js'
import typescriptParser from '@typescript-eslint/parser'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import prettier from 'eslint-config-prettier'

export default [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ...reactRecommended,
    languageOptions: {
      ...reactRecommended.languageOptions,
      parser: typescriptParser,
      globals: {
        JSX: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactRecommended.rules,
      ...js.configs.recommended.rules,
      ...prettier.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
]
