<template>
  <div :id="id" />
</template>

<script>
import Jodit from 'jodit'

export default {
  name: 'JoditVue',

  props: {
    value: { type: String, required: true },
    id: { type: String, default: 'editor' },
    buttons: { type: Array, default: null },
    extraButtons: { type: Array, default: null },
    config: { type: Object, default: () => ({}) }
  },

  computed: {
    editorConfig() {
      const config = { ...this.config }

      if (this.buttons) {
        config.buttons = this.buttons
        config.buttonsMD = this.buttons
        config.buttonsSM = this.buttons
        config.buttonsXS = this.buttons
      }

      if (this.extraButtons) config.extraButtons = this.extraButtons
      return config
    }
  },

  mounted() {
    const editor = new Jodit(`#${this.id}`, this.editorConfig)
    editor.value = this.value
    editor.events.on('change', newValue => this.$emit('input', newValue))
  }
}
</script>
