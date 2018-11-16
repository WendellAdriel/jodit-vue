module.exports = {
  lintOnSave: undefined,

  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },

  chainWebpack: config => {
    config.externals({
      ...config.get('externals'),
      'jodit': 'jodit'
    })
  }
}
