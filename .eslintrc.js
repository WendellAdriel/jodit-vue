module.exports = {
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  rules: {
    'vue/html-self-closing': ['warn', {
      html: { normal: 'never' }
    }]
  },
  env: {
    browser: true
  }
}
