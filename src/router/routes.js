/* eslint-disable */
import History from '../Pages/Scanned_Items_Page'
import Scanner from '../Pages/Scanner_Page.vue'
import Home from '../Pages/Home_Page.vue'
import Base from'../Layout/Layout.vue'
import Settings from '../Pages/Settings_Page.vue'


const routes = [{
	path: '/',
	component: Base,
	children: [
	    {
	  	path: '', 
	  	component: Home
	    },
	    {
	  	path: 'scanner', 
	  	component: Scanner
	    },
	    {
	  	path: 'history',
	  	component: History 
	    },
	     {
	  	path: 'settings',
	  	component: Settings 
	    }	
    ]
}]


export default routes