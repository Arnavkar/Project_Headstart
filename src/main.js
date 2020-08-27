import Vue from 'vue'
import router from './router'
import './quasar'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
	router: router,
	store: store,
	render: h => h('router-view'),
}).$mount('#app')
