/*eslint-disable*/
const state = {
    database:{}
	//if implementing firebase - firebase can't read arrays, only objects. Therefore we need to restructure tasks and a JSON object
    // if we change it to this object structure, the binded key in the todo page needs to change as well
    //POM = Place of Manufacture
    //Barcode is the item key
}
const mutations = {
	addDatabase(state,payload){
		state.database = payload;
	},
}
const actions = {
	addDatabase({commit},payload){
		commit('addDatabase', payload)
    }
}
const getters = {
	database: (state) => {
		return state.database
	}
}
export default{
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}