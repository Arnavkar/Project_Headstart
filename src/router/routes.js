/* eslint-disable */
import Scanned_Items from '../Pages/Scanned_Items_Page'
import Scanner from '../Pages/Scanner_Page.vue'
import Home from '../Pages/Home_Page.vue'
import Layout from'../Layout/Layout.vue'
import noNav from '../Layout/Layout(noNav).vue'
import faq from '../Pages/FAQ_Page.vue'

import Database from '../Pages/Database_Page.vue'
import profile from'../Pages/Profile_Page.vue'
import request from '../Pages/Request_Page.vue'
import update from '../Pages/Update_Page.vue'
import add from '../Pages/Add_Page.vue'
import info from '../components/ItemInfo.vue'

import Landing from '../Pages/Landing_Page.vue'
import Auth from '../Pages/Auth_Page.vue'
import SignUp from '../Pages/SignUp_Page.vue'

const routes = [
	{
	path: '/b/',
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
		},
    ]
	},
	{
	path:'/n/',
	component: noNav,
	children:[
		{
		path: 'product_request',
		component: request
		},
		{
		path: 'update_info',
		component: update
		},
		{
		path: 'add_item',
		component: add
		},

	]
	},
	{
	path: '/',
	component: Landing
	},
	{
	path: '/signup',
	component: SignUp
	},
	{
	path: '/login',
	component: Auth
	}
]

export default routes