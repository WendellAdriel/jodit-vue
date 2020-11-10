/* eslint-env node */

import globalThis from '@ungap/global-this'
import JoditEditor from './JoditEditor.vue'

export function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('JoditEditor', JoditEditor)
  // Backwards compatible global component registration
  Vue.component('JoditVue', JoditEditor)
}

const plugin = { install }

if (globalThis.Vue) globalThis.Vue.use(plugin)

export default plugin
export { JoditEditor, JoditEditor as JoditVue }
export { Jodit } from 'jodit'
