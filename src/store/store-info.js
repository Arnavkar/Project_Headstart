const state = {
    info:{
        Name:"",
		Email:"",
		priceRange:2.5,
        firstTime:true,
        scanTally:0,
        itemInfoTally:0,
        itemRequestTally:0,
        signUpDate:""
    }
}

const mutations = {
	createUser(state,payload){
		state.info = payload
	},
	updatePriceRange(state,payload){
		state.info.priceRange = payload
	},
	updateFirstTime(state){
		state.firstTime = false;
	},
	updateInfo(state,payload){
		state.info.name = payload.name;
		state.info.email = payload.email;
	},
	updateScanTally(state){
		state.info.scanTally += 1;
	},
	updateItemRequestTally(state){
		state.info.itemRequestTally += 1;
	},
	updateItemInfoTally(state){
		state.info.itemInfoTally += 1;
	}
}
const actions = {
	createUser({commit},payload){
		commit('createUser',payload)
	},
	updateFirstTime({commit}){
		commit('updateFirstTime')
	},
	updateInfo({commit},payload){
		commit('updateInfo', payload)
	},
	updateScanTally({commit}){
		commit('updateScanTally')
	},
	updateItemRequestTally({commit}){
		commit('updateItemRequestTally')
	},
	updateItemInfoTally({commit}){
		commit('updateItemInfoTally')
	},
	updatePriceRange({commit},payload){
		commit('updatePriceRange',payload)
	}
}
const getters = {
	info: (state) => {
		return state.info
	}
}
export default{
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}