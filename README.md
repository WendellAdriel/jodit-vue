# Jodit Vue

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/WendellAdriel/time-storage/blob/master/LICENSE)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

Vue Wrapper for the **[Jodit Editor](https://github.com/xdan/jodit)**

## How to use

Install **jodit** and this wrapper:

```
yarn add jodit @wendell_adriel/jodit-vue
```

## Import and use it

```
import Vue from 'vue'
import JoditVue from '@wendell_adriel/jodit-vue'

Vue.use(JoditVue)
```

Instead of using `Vue.use(JoditVue)` you can use the component locally

```
<template>
    <div id="app">
        <jodit-vue v-model="content">
    </div>
</template>

<script>
import JoditVue from '@wendell_adriel/jodit-vue'

export default {
    name: 'app',

    components: { JoditVue },

    data () {
        return {
            content: '<h1>TEST</h1>'
        }
    }
}
</script>
```

## Component Properties

If you pass only the `v-model` for the component, it will load all the editor features, if you want to customize it, you can do it with its properties that are listed below, but all of them are not required, just if you want to customize your editor that you will need them:

| Property | Type   | Default Value | Description                                                                                                           |
| :------: | :----: | :-----------: | :-------------------------------------------------------------------------------------------------------------------: |
| id       | String | 'editor'      | The ID of the editor `div` wrapper, you need to specify it if you want to mount more than one editor on the same page |
| buttons  | Array  | `null`        | The buttons that you want to show on toolbar, if this is not provided, all the buttons will be shown                  |
| extraButtons | Array | `null`     | If you need to create and display custom buttons you can pass an array with your custom buttons to this property      |
| buttonSize | String  | 'middle'   | The size of the buttons on the toolbar, by default it's 'middle' but you can pass the values 'small' or 'large'       |
| showCharsCounter | Boolean | true | If you want to show the chars counter on the bottom of the editor                                                     |
| showWordsCounter | Boolean | true | If you want to show the words counter on the bottom of the editor                                                     |
| showXpath        | Boolean | true | If you want to show the XPath of the current selection on the bottom of the editor                                    |

#### Buttons property

When providing the buttons to show on the editor you will need to provide an array with sub arrays on it, each sub array will be a "button group", on the toolbar the groups are separated by a divider, so if you want to group the buttons by their behavior or something like that, you just need to pass an array like the one below:

```
<template>
    <div id="app">
        <jodit-vue v-model="content" :buttons="buttons">
    </div>
</template>

<script>
import JoditVue from '@wendell_adriel/jodit-vue'

export default {
    name: 'app',

    components: { JoditVue },

    data () {
        return {
            content: '<h1>TEST</h1>',
            buttons: [
                ['source'],
                ['bold', 'strikethrough', 'underline', 'italic'],
                ['font', 'fontsize', 'brush']
            ]
        }
    }
}
</script>
```

#### Extra Buttons property

If you need to create custom buttons to the editor, you can create them and provide the component with an array

```
<template>
    <div id="app">
        <jodit-vue v-model="content" :buttons="buttons" :extra-buttons="customButtons">
    </div>
</template>

<script>
import JoditVue from '@wendell_adriel/jodit-vue'

export default {
    name: 'app',

    components: { JoditVue },

    data () {
        return {
            content: '<h1>TEST</h1>',
            buttons: [
                ['source'],
                ['bold', 'strikethrough', 'underline', 'italic'],
                ['font', 'fontsize', 'brush']
            ],
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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/11641518?v=4" width="100px;"/><br /><sub><b>Wendell Adriel</b></sub>](https://wendelladriel.com)<br />[💻](https://github.com/WendellAdriel/@wendell_adriell/jodit-vue/commits?author=WendellAdriel "Code") [📖](https://github.com/WendellAdriel/@wendell_adriell/jodit-vue/commits?author=WendellAdriel "Documentation") [💡](#example-WendellAdriel "Examples") [🤔](#ideas-WendellAdriel "Ideas, Planning, & Feedback") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!