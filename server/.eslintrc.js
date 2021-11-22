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
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-useless-catch': 'off',
    'no-useless-constructor': 'off',
    'no-throw-literal': 'off',
    'no-underscore-dangle': 'off',
    semi: 'off',
  },
};
