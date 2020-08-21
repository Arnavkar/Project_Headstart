import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../Pages/Profile_Page.vue'
import Scanner from '../Pages/Scanner_Page.vue'
import Data from '../Pages/Data_Page.vue'

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
    path: '/Data',
    name: 'Data',
    component: Data
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
