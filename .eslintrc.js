module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  'max-classes-per-file': [
    'error',
    { ignoreExpressions: true, max: 10 },
  ],
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'no-plusplus': 'off',
  },
};
