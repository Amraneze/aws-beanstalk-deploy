module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb-base', 'prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: 2,
    indent: 'off',
    'no-console': 'off',
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          ':': 'before',
        },
      },
    ],
  },
};
