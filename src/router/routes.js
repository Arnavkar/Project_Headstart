/* eslint-disable */
import Scanned_Items from '../Pages/Scanned_Items_Page'
import Scanner from '../Pages/Scanner_Page.vue'
import Home from '../Pages/Home_Page.vue'
import Layout from'../Layout/Layout.vue'
import faq from '../Pages/FAQ_Page.vue'
import Auth from '../Pages/Auth_Page.vue'
import Database from '../Pages/Database_Page.vue'
import profile from'../Pages/Profile_Page.vue'


const routes = [
	{
	path: '/',
	component: Layout,
	children: [
	    {
	  	path: 'home', 
	  	component: Home
	    },
	    {
	  	path: 'scanner', 
	  	component: Scanner
	    },
	    {
	  	path: 'data',
	  	component: Database
		},
		{
		path: 'history',
		component: Scanned_Items 
		},
	    {
	  	path: 'FAQ',
		component: faq
		},
		{
		path: 'profile',
		component: profile
		}
    ]
	},
	{
	path: '/login',
	component: Auth
	}
]

export default routes