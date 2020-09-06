const state = {
    info:{
        name:"",
        email:"",
        firstTime:true,
        scanTally:0,
        callToActionTally:0,
        itemRequestTally:0,
        signUpDate:""
    }
}

const mutations = {
}
const actions = {
}
const getters = {
	database: (state) => {
		return state.database
	},
	itemSearch: (state) => (barcode) =>{
		return state.database.find(item => item.barcode === barcode)
	}
}
export default{
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}