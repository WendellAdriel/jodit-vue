<template>
  <textarea></textarea>
</template>

<script>
import { Jodit } from 'jodit'

export default {
  name: 'JoditEditor',

  props: {
    modelValue: { type: String, required: true },
    buttons: { type: Array, default: null },
    extraButtons: { type: Array, default: null },
    config: { type: Object, default: () => ({}) },
    plugins: { type: Array, default: () => [] }
  },

  emits: ['update:modelValue'],

  data: () => ({ editor: null }),

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

  watch: {
    modelValue(newValue) {
      if (this.editor.value !== newValue) this.editor.value = newValue
    }
  },

  mounted() {
    if (this.plugins.length) {
      this.plugins.forEach((plugin) => {
        Jodit.plugins.add(plugin.name, plugin.callback)
      })
    }
    this.editor = Jodit.make(this.$el, this.editorConfig)
    this.editor.value = this.modelValue
    this.editor.events.on('change', (newValue) =>
      this.$emit('update:modelValue', newValue)
    )
  },

  beforeUnmount() {
    this.editor.destruct()
  }
}
</script>
