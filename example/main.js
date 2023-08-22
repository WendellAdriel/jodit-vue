import { createApp } from 'vue'
import App from './App.vue'
import JoditVue from '../src/wrapper'

const app = createApp(App)
app.use(JoditVue)
app.config.productionTip = false

app.mount('#app')
