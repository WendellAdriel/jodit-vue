<div align="center">
    <p>
        <h1>Jodit Vue</h1>
        Vue Wrapper for the <a href="https://github.com/xdan/jodit" target="_blank">Jodit Editor</a>
    </p>
</div>

<p align="center">
<a href="https://www.npmjs.com/package/jodit-vue" target="_blank"><img src="https://img.shields.io/npm/v/jodit-vue.svg?style=flat-square" alt="Version" /></a>
<a href="https://npmcharts.com/compare/jodit-vue" target="_blank"><img src="https://img.shields.io/npm/dm/jodit-vue.svg?style=flat-square" alt="Downloads" /></a>
<a href="https://github.com/WendellAdriel/jodit-vue/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square" alt="License" /></a>
</p>

## How to use

> Use version 2.* for Vue 2
>
> Use version 3.* for Vue 3

Install **Jodit Vue**:

```
npm install jodit-vue --save
// or with Yarn
yarn add jodit-vue
```

## Import and use it

Since this component is just a wrapper, you need to include the `css` of the **Jodit Editor** on your app for it to work properly, if you're using `vue-cli` to create your app, or another build system you can import it directly or add a `link` tag with the `css` file provided by the **Jodit Editor** package.

```js
import 'jodit/build/jodit.min.css'
import Vue from 'vue'
import JoditVue from 'jodit-vue'

Vue.use(JoditVue)
```

Instead of using `Vue.use(JoditVue)` you can use the component locally

```vue
<template>
    <div id="app">
        <jodit-editor v-model="content" />
    </div>
</template>

<script>
import 'jodit/build/jodit.min.css'
import { JoditEditor } from 'jodit-vue'

export default {
    name: 'app',

    components: { JoditEditor },

    data () {
        return {
            content: '<h1>Hello Jodit Vue</h1>'
        }
    }
}
</script>
```

You can check and test it on **[Codesanbox](https://codesandbox.io/s/jv0l1r86wv)** too.

## Using without a build system

If you don't use a build system on your app, you can also use Jodit Vue without problems, check and test it on this **[JsFiddle](https://jsfiddle.net/6ch2gn0t/)**.

## Component Properties

If you pass only the `v-model` for the component, it will load all the editor features, if you want to customize it, you can do it with its properties that are listed below, but all of them are not required, just if you want to customize your editor that you will need them:

| Property         | Type    | Default Value | Description                                                                                                           |
| :--------------: | :-----: | :-----------: | :-------------------------------------------------------------------------------------------------------------------: |
| buttons          | Array   | `null`        | The buttons that you want to show on toolbar, if this is not provided, all the buttons will be shown                  |
| extraButtons     | Array   | `null`        | If you need to create and display custom buttons you can pass an array with your custom buttons to this property      |
| config           | Object  | `{}`          | The config object that has all the other configurations for the editor                                                |
| plugins          | Array   | `[]`          | If you need to create custom plugins you can pass array of plugins to this property                                   |

#### Buttons property

When providing the buttons to show on the editor you will need to provide an array with the buttons that you want to show. The button names can be found **[here](https://xdsoft.net/jodit/play.html)**. You can also pass a `|` to put a divider between the buttons.

```vue
<template>
    <div id="app">
        <jodit-editor v-model="content" :buttons="buttons" />
    </div>
</template>

<script>
import 'jodit/build/jodit.min.css'
import { JoditEditor } from 'jodit-vue'

export default {
    name: 'app',

    components: { JoditEditor },

    data () {
        return {
            content: '<h1>Hello Jodit Vue</h1>',
            buttons: ['source', 'image', '|', 'bold', 'underline', 'italic']
        }
    }
}
</script>
```

#### Extra Buttons property

If you need to create custom buttons to the editor, you can create them and provide the component with an array

```vue
<template>
    <div id="app">
        <jodit-editor v-model="content" :buttons="buttons" :extra-buttons="customButtons" />
    </div>
</template>

<script>
import 'jodit/build/jodit.min.css'
import { JoditEditor } from 'jodit-vue'

export default {
    name: 'app',

    components: { JoditEditor },

    data () {
        return {
            content: '<h1>Hello Jodit Vue</h1>',
            buttons: ['source', 'image', '|', 'bold', 'underline', 'italic'],
            customButtons: [
                {
                    name: 'insertDate',
                    iconURL: 'http://xdsoft.net/jodit/logo.png',
                    exec: function (editor) {
                        editor.selection.insertHTML((new Date).toDateString());
                    }
                }
            ]
        }
    }
}
</script>
```

To create custom buttons, check the **[Jodit Editor Docs](https://xdsoft.net/jodit/doc/)**

#### Config property

This config allows you to pass all the other configurations found **[here](https://xdsoft.net/jodit/doc/options/)** to customize your editor

#### Plugins property
Plugins property allows you to pass array of plugin objects with name and callback which will be initialized when Jodit is initialized. Plugins are initialized globally and it will added to all instances of Jodit editor.
For example:
```vue
<template>
    <div id="app">
        <jodit-editor v-model="content" :plugins="plugins" />
    </div>
</template>

<script>
import 'jodit/build/jodit.min.css'
import { JoditEditor } from 'jodit-vue'

export default {
    name: 'app',

    components: { JoditEditor },

    data () {
        return {
            content: '<h1>Hello Jodit Vue</h1>',
            plugins: [
              {
                name: 'example',
                callback: function (editor) {
                  editor.events.on('afterInit', function () {
                    console.warn('Example plugin has beed initialized, check Jodit documentation for more details.')
                  })
                }
              }
            ]
        }
    }
}
</script>
```
To add plugins Jodit Vue uses `Jodit.plugins.add` API.
Check Jodit [documentation](https://github.com/xdan/jodit#create-plugin) and [examples](https://xdsoft.net/jodit/examples/plugin/custom_plugin.html) how to implement plugins.

## Credits ✨

- [Wendell Adriel](https://github.com/WendellAdriel)
- [All Contributors](https://github.com/WendellAdriel/jodit-vue/contributors)
