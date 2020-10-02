import Vue from 'vue'
import Vuex from 'vuex'
import items from '../store/store-items.js'
import database from '../store/store-database.js'
import info from '../store/store-info.js'

Vue.use(Vuex)

export default function( /*{ssrContext}*/ ) {
    const Store = new Vuex.Store({
        modules: {
            items,
            database,
            info
        },
        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV
    });
    return Store;
}