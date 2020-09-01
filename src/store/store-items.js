/*eslint-disable*/
import Vue from 'vue'
const state = {
	//if implementing firebase - firebase can't read arrays, only objects. Therefore we need to restructure tasks and a JSON object
    // if we change it to this object structure, the binded key in the todo page needs to change as well
	//POM = Place of Manufacture
	
    //Barcode is the item key
    items:{
    	'6922877700255':{
			name: 'Skippy: Chocolate Stripe',
			barcode: '6922877700255',
    		image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-7281032/skippy_skippy_chocolate_stripe_-350_g-_full02_g5p1n3ct.jpg',
			POM:'China',
			manufacturer:'Nestle',
			rating: 2
    	}
    }
}
const mutations = {
	// addItem(state,payload){
	// 	Vue.set(state.items,payload.id,payload.item)
	// },
	deleteItem(state,id){
		Vue.delete(state.items,id)
	}
}
const actions = {
	// addItem({commit},payload){
	// 	commit('addItem', payload)
	// 	let
	// },
	deleteItem({commit},id){
		commit('deleteItem',id)
	}
}
const getters = {
	items: (state) => {
		return state.items
	}
}
export default{
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}