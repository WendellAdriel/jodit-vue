import JoditEditor from './JoditEditor.vue'

export { Jodit } from 'jodit'
export { JoditEditor, JoditEditor as JoditVue }

export default {
  install: (app) => {
    app.component('JoditEditor', JoditEditor)
  }
}
