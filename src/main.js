import Vue from 'vue'
// import App from './App.vue'
import router from './router/router.js'

Vue.config.productionTip = false

new Vue({
	router: router,
	render: h => h('router-view'),
}).$mount('#app')
