import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store'


Vue.config.productionTip = false

const app = new Vue({
	el: '#app',
	router: router,
	store, 
	render: h => h(App),
})
app.$mount('#app')