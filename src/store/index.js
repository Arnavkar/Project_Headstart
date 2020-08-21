import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const url = ""
// const headers = { Accept: "application/json" }

var username = 'Arnav Shirodkar'
var email = 'arnavshirodkar@gmail.com'
var mobile = '93893864'
var dob = '04/11/1998'
var gen = 'Male'
var bank = 'POSB 257 - XXX - XXXX'

if(localStorage.getItem("appData")) {
	username = JSON.parse(localStorage.getItem("appData")).currentName
	email = JSON.parse(localStorage.getItem("appData")).currentEmail
	mobile = JSON.parse(localStorage.getItem("appData")).currentMobile
	dob = JSON.parse(localStorage.getItem("appData")).currentDob
	gen = JSON.parse(localStorage.getItem("appData")).currentGen
	bank = JSON.parse(localStorage.getItem("appData")).currentBank
}


export default new Vuex.Store({
	state: {
		username: username,
		email: email, 
		mobile: mobile, 
		dob: dob, 
		gen: gen, 
		bank: bank, 
		items: [],
	},
	mutations: { //Synchronous
		setUserData(state, mutation) {
			mutation
			state.username = mutation.currentName
			state.email = mutation.currentEmail
			state.mobile = mutation.currentMobile
			state.dob = mutation.currentDob
			state.gen = mutation.currentGen
			state.bank = mutation.currentBank
		},
	},
	actions: { //Asynchronous
	},
	modules: {},
	getters: {
		getName: state => state.username,
		getEmail: state => state.email,
		getMobile: state => state.mobile,
		getDob: state => state.dob,
		getGen: state => state.gen,
		getBank: state => state.bank,
		getItems: state => state.items,
	}
})