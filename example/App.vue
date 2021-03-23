<template>
  <div id="app">
    <div id="container">
      <h1>Jodit Vue example</h1>
      <jodit-editor
        :value="content"
        :buttons="buttons"
        :plugins="plugins"
      />
    </div>
  </div>
</template>

<script>
import { JoditEditor } from '../src/wrapper'

export default {
  name: 'App',
  components: {
    JoditEditor
  },
  data () {
    return {
      content: '<p>Hello Jodit Vue</p>',
      buttons: ['source', 'image', '|', 'bold', 'underline', 'italic'],
      plugins: [
        {
          name: 'example',
          cb: function (editor) {
            editor.events.on('afterInit', function () {
              console.warn('Example plugin has beed initiliazed, check jodit documentation for mode details.')
            })
          }
        }
      ]
    }
  }
}
</script>

<style>
@import '~jodit/build/jodit.min.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#container {
  padding: 20px;
  background: #fff;
}

.jodit-container:not(.jodit_inline) .jodit-wysiwyg p {
    margin: 0;
}
</style>
