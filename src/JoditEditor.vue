<template>
  <textarea></textarea>
</template>

<script>
import { Jodit } from 'jodit'

export default {
  name: 'JoditEditor',

  props: {
    value: { type: String, required: true },
    buttons: { type: Array, default: null },
    extraButtons: { type: Array, default: null },
    config: { type: Object, default: () => ({}) },
    plugins: { type: Array, default: () => [] }
  },

  data: () => ({ editor: null }),

  computed: {
    editorConfig () {
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

  watch: {
    value (newValue) {
      if (this.editor.value !== newValue) this.editor.value = newValue
    }
  },

  mounted () {
    if (this.plugins.length) {
      this.plugins.forEach(plugin => {
        Jodit.plugins.add(plugin.name, plugin.callback)
      })
    }
    this.editor = new Jodit(this.$el, this.editorConfig)
    this.editor.value = this.value
    this.editor.events.on('change', newValue => this.$emit('input', newValue))
  },

  beforeDestroy () {
    this.editor.destruct()
  }
}
</script>
