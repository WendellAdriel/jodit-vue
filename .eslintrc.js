module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/strongly-recommended'
    ],
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/require-default-prop': 'off'
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
}
