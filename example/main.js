import Vue from 'vue'
import App from './App.vue'
import JoditVue from '../src/wrapper'

Vue.use(JoditVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
