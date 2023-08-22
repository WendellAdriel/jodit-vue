/* eslint-env node */

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  rules: {
    'vue/html-self-closing': [
      'warn',
      {
        html: { normal: 'never' }
      }
    ]
  },
  env: {
    browser: true
  }
}
