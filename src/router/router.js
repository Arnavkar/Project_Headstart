import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../Pages/Profile_Page.vue'
import Scanner from '../Pages/Scanner_Page.vue'

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
]

const router = new VueRouter({
  routes
})

export default router
