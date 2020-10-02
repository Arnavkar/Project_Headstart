import Vue from 'vue'
import router from './router'
import './quasar'
import store from './store'
import VueGAPI from 'vue-gapi'
import PortalVue from 'portal-vue'
export const bus = new Vue();


Vue.config.productionTip = false
Vue.config.devtools = true

const apiConfig = {
  apiKey: '/',
  clientId: '/',
  // apiKey: 'YOUR API KEY',
  // clientId: 'YOUR CLIENT ID',
  discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
  scope: 'https://www.googleapis.com/auth/spreadsheets',

  // works only with `ux_mode: "prompt"`
  refreshToken: true,
}

// Use the plugin and pass along the configuration
Vue.use(VueGAPI, apiConfig)
Vue.use(PortalVue)

new Vue({
	router: router,
	store: store,
	render: h => h('router-view'),
}).$mount('#app')
