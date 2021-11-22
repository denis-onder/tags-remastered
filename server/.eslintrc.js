module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'class-methods-use-this': 'off',
    'no-useless-catch': 'off',
    'no-useless-constructor': 'off',
    'comma-dangle': 'off',
    'operator-linebreak': 'off',
    'no-throw-literal': 'off',
    semi: 'off',
  },
};