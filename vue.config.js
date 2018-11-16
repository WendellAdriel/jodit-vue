module.exports = {
  lintOnSave: undefined,

  chainWebpack: config => {
    config.entryPoints.delete('app')
    config.entry('jodit-vue')
      .add('./src/JoditEditor.vue')
      .end()
  }
}
