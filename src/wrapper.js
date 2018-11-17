import JoditVue from './JoditVue.vue'

export function install (Vue) {
	if (install.installed) return
	install.installed = true
	Vue.component('JoditVue', JoditVue)
}

const plugin = { install }
let GlobalVue = null;

if (typeof window !== 'undefined') GlobalVue = window.Vue
else if (typeof global !== 'undefined') GlobalVue = global.Vue // eslint-disable-line

if (GlobalVue) GlobalVue.use(plugin)

export default JoditVue
