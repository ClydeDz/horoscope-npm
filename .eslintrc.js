module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: [],
  root: true,
  rules: {
    'no-console': 'error',
    'multiline-comment-style': ['error', 'bare-block'],
    'no-inline-comments': 'error',
  },
  overrides: [
    {
      files: ['consumer/**/*.ts'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['**/*.test.ts'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
}
