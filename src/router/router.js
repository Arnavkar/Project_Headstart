import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../Pages/Profile_Page.vue'
import Scanner from '../Pages/Scanner_Page.vue'
import Item1Info from '../Pages/Item1Info_Page.vue'
import Item2Info from '../Pages/Item2Info_Page.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Scan',
    name: 'Scanner',
    component: Scanner
  },
  {
    path: '/Item1Info',
    name: 'Item1Info',
    component: Item1Info
  },
  {
    path: '/Item2Info',
    name: 'Item2Info',
    component: Item2Info
  },
]

const router = new VueRouter({
  routes
})

export default router
