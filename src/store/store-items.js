/*eslint-disable*/
import Vue from 'vue'
const state = {
	//if implementing firebase - firebase can't read arrays, only objects. Therefore we need to restructure tasks and a JSON object
    // if we change it to this object structure, the binded key in the todo page needs to change as well
	//POM = Place of Manufacture
	
    //Barcode is the item key
    items:{
		'6922877700255':{
			barcode: '6922877700255',
			image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-7281032/skippy_skippy_chocolate_stripe_-350_g-_full02_g5p1n3ct.jpg',
			name: 'Skippy: Chocolate Stripe',
			category: 'Food and Beverages',
			price:'2.5',
			m1:1,
			m2:0,
			m3:0,
			p1:0,
			p2:0,
			p3:0,
			i1:0,
			i2:0,
			i3:0,
			i4:0,
			rating: 1,
			additional: ""
		}
		
    }
}
const mutations = {
	addItem(state,payload){
		Vue.set(state.items,payload.barcode,payload)
	},
	deleteItem(state,barcode){
		Vue.delete(state.items,barcode)
	}
}
const actions = {
	addItem({commit},payload){
		commit('addItem', payload)
	},
	deleteItem({commit},barcode){
		commit('deleteItem',barcode)
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