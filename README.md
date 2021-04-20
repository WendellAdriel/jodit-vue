# Jodit Vue

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/WendellAdriel/jodit-vue/blob/master/LICENSE)
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)

[![version][version-badge]][package]
[![downloads][downloads-badge]][npmcharts]
[![size][size-badge]][unpkg-dist] [![gzip size][gzip-badge]][unpkg-dist]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

Vue Wrapper for the **[Jodit Editor](https://github.com/xdan/jodit)**

## How to use

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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://wendelladriel.com"><img src="https://avatars1.githubusercontent.com/u/11641518?v=4" width="100px;" alt="Wendell Adriel"/><br /><sub><b>Wendell Adriel</b></sub></a><br /><a href="https://github.com/WendellAdriel/jodit-vue/commits?author=WendellAdriel" title="Code">💻</a> <a href="https://github.com/WendellAdriel/jodit-vue/commits?author=WendellAdriel" title="Documentation">📖</a> <a href="#example-WendellAdriel" title="Examples">💡</a> <a href="#ideas-WendellAdriel" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/daarxwalker"><img src="https://avatars3.githubusercontent.com/u/26570413?v=4" width="100px;" alt="daarxwalker"/><br /><sub><b>daarxwalker</b></sub></a><br /><a href="https://github.com/WendellAdriel/jodit-vue/issues?q=author%3Adaarxwalker" title="Bug reports">🐛</a> <a href="#ideas-daarxwalker" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/jsadzinski"><img src="https://avatars1.githubusercontent.com/u/24715701?v=4" width="100px;" alt="Jarosław Sadziński"/><br /><sub><b>Jarosław Sadziński</b></sub></a><br /><a href="https://github.com/WendellAdriel/jodit-vue/issues?q=author%3Ajsadzinski" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/edgar-koster"><img src="https://avatars2.githubusercontent.com/u/24190040?v=4" width="100px;" alt="edgar-koster"/><br /><sub><b>edgar-koster</b></sub></a><br /><a href="https://github.com/WendellAdriel/jodit-vue/issues?q=author%3Aedgar-koster" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/abdelaziz321"><img src="https://avatars1.githubusercontent.com/u/21992961?v=4" width="100px;" alt="abdelaziz321"/><br /><sub><b>abdelaziz321</b></sub></a><br /><a href="https://github.com/WendellAdriel/jodit-vue/issues?q=author%3Aabdelaziz321" title="Bug reports">🐛</a> <a href="https://github.com/WendellAdriel/jodit-vue/commits?author=abdelaziz321" title="Code">💻</a> <a href="https://github.com/WendellAdriel/jodit-vue/commits?author=abdelaziz321" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/dbettini"><img src="https://avatars2.githubusercontent.com/u/16350909?v=4" width="100px;" alt="Dino Bettini"/><br /><sub><b>Dino Bettini</b></sub></a><br /><a href="#question-dbettini" title="Answering Questions">💬</a> <a href="https://github.com/WendellAdriel/jodit-vue/issues?q=author%3Adbettini" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/vladimyr"><img src="https://avatars1.githubusercontent.com/u/1170440?v=4" width="100px;" alt="Dario Vladović"/><br /><sub><b>Dario Vladović</b></sub></a><br /><a href="https://github.com/WendellAdriel/jodit-vue/commits?author=vladimyr" title="Code">💻</a> <a href="https://github.com/WendellAdriel/jodit-vue/commits?author=vladimyr" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!!!

[downloads-badge]: https://img.shields.io/npm/dm/jodit-vue.svg?style=flat-square
[npmcharts]: http://npmcharts.com/compare/jodit-vue
[version-badge]: https://img.shields.io/npm/v/jodit-vue.svg?style=flat-square
[package]: https://www.npmjs.com/package/jodit-vue
[size-badge]: http://img.badgesize.io/https://unpkg.com/jodit-vue/dist/jodit-vue.umd.js?style=flat-square&label=size
[unpkg-dist]: https://unpkg.com/jodit-vue/dist/jodit-vue.min.js
[gzip-badge]: http://img.badgesize.io/https://unpkg.com/jodit-vue/dist/jodit-vue.min.js?label=gzip%20size&style=flat-square&compression=gzip
[github-watch-badge]: https://img.shields.io/github/watchers/WendellAdriel/jodit-vue.svg?style=social
[github-watch]: https://github.com/WendellAdriel/jodit-vue/watchers
[github-star-badge]: https://img.shields.io/github/stars/WendellAdriel/jodit-vue.svg?style=social
[github-star]: https://github.com/WendellAdriel/jodit-vue/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20jodit-vue!%20https://github.com/WendellAdriel/jodit-vue%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/WendellAdriel/jodit-vue.svg?style=social
