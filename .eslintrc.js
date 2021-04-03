module.exports = {
  root: false,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': 0,
    'no-unused-vars': 0,
    'linebreak-style': 0,
    'semi': ["error", "never"],
    'object-curly-newline': 0,
    'eslint-disable-next-line': 
  },
};
