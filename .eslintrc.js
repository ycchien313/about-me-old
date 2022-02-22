module.exports = {
  extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended'],
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
};
