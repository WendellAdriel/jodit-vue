/* eslint-env node */

import globalThis from '@ungap/global-this'
import JoditEditor from './JoditEditor.vue'

export const JoditPlugin = {
  install: (app) => {
    app.component('JoditEditor', JoditEditor)
  }
}

if (globalThis.Vue) globalThis.Vue.use(JoditPlugin)

export default JoditPlugin
export { JoditEditor, JoditEditor as JoditVue }
export { Jodit } from 'jodit'
