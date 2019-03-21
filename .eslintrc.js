module.exports = {
  parser: 'babel-eslint',
  root: true,
  plugins: ['import', 'react', 'jest', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  rules: {
    'class-methods-use-this': 0,
    'comma-dangle': [0, 'ignore'],
    'prettier/prettier': 'error',
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
  }
};
