module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/require-default-prop': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
