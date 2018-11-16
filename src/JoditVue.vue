<template>
  <div :id="id" />
</template>

<script>
import 'jodit/build/jodit.min.css'
import Jodit from 'jodit'

export default {
  name: 'JoditVue',

  props: {
    value: { type: String, required: true },
    id: { type: String, default: 'editor' },
    buttons: { type: Array, default: null },
    extraButtons: { type: Array, default: null },
    buttonSize: { type: String, default: 'middle' },
    showCharsCounter: { type: Boolean, default: true },
    showWordsCounter: { type: Boolean, default: true },
    showXpath: { type: Boolean, default: true }
  },

  computed: {
    formattedButtons () {
      let buttons = ''

      this.buttons.forEach(buttonGroup => {
        const formatted = buttonGroup.join(',')
        buttons += `${formatted},|,`
      })

      return buttons
    },

    editorConfig () {
      const config = {
        toolbarButtonSize: this.buttonSize,
        showCharsCounter: this.showCharsCounter,
        showWordsCounter: this.showWordsCounter,
        showXPathInStatusbar: this.showXpath
      }

      if (this.buttons) config.buttons = this.formattedButtons
      if (this.extraButtons) config.extraButtons = this.extraButtons
      return config
    }
  },

  mounted () {
    const editor = new Jodit(`#${this.id}`, this.editorConfig)
    editor.value = this.value
    editor.events.on('change', newValue => this.$emit('input', newValue))
  }
}
</script>
