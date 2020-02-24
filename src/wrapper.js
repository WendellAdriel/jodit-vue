/* eslint-env node */

import JoditEditor from './JoditEditor.vue'

export function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('JoditEditor', JoditEditor)
  // Backwards compatible global component registration
  Vue.component('JoditVue', JoditEditor)
}

const plugin = { install }
let GlobalVue = null

if (typeof window !== 'undefined') GlobalVue = window.Vue
else if (typeof global !== 'undefined') GlobalVue = global.Vue

if (GlobalVue) GlobalVue.use(plugin)

export default plugin
export { JoditEditor, JoditEditor as JoditVue }
export { default as Jodit } from 'jodit'
