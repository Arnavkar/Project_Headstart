<template>
  <div>
    <q-layout view="hHh lpR fFf">
      
      <q-page-container>
        <transition name = "view">
          <router-view></router-view>
        </transition>
      </q-page-container>

      <q-header 
      class="bg-white text-secondary header"
      >
        <q-toolbar>
          <q-btn dense flat round icon="keyboard_arrow_left" @click= "goBack" size = "20px"/> 
          <q-space/>
          <q-btn dense flat round icon="signal_cellular_alt" size = "20px" @click="right = !right"  class="rotate-270"/>
        </q-toolbar>
      </q-header>

      <q-footer>
        <q-tabs
        class="text-dark">
          <q-route-tab
          clickable
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :exact-active-class="nav.class"/>
        </q-tabs>
      </q-footer>

      <q-drawer v-model="right" side="right" overlay behavior="mobile" elevated>
        <q-list dark>
          <q-item-label header> Navigation </q-item-label>
          <q-item
            class="text-grey-9"
            v-for="tab in drawerTabs"
            :key="tab.label"
            :to="tab.to"
            exact
            clickable
            bordered>
            <q-item-section avatar>
              <q-icon :name="tab.icon"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{tab.label}}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            class="text-grey-9"
            exact 
            clickable
            @click.stop="promptToSignout()">
            <q-item-section avatar>
              <q-icon name="login"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Sign Out</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
    

    </q-layout>
  </div>
</template>

<script>
import { bus } from '../main'

export default {
  data () {
    return {
      right:false,
      navs:[
        {
          icon: "home",
          label:"Home",
          to:"/home",
          class: "text-green-7"
        },
        {
          icon:"party_mode",
          label:"camera",
          to:"/scanner",
          class: "text-green-7"
        },
        {
          icon: "list",
          label:"Data",
          to: "/data",
          class: "text-green-7"
        },
        {
          icon: "favorite",
          label:"History",
          to: "/history",
          class: "text-red"
        }
      ],
      drawerTabs:[
        {
          icon: "account_circle",
          label: "Account Information",
          to: "/profile"
        },
        {
          icon: "contact_support",
          label: "FAQ",
          to: "/FAQ"
        },
        {
          icon: "grade",
          label: "Product Request",
          to: "/settings"
        },
        {
          icon: "announcement",
          label: "Report Outdated Info",
          to: "/settings"
        }
      ]
    } 
  },
  methods:{
    signOut(){
      bus.$emit("sign-out")
    },
    promptToSignout(){
			this.$q.dialog({
				title:'Sign Out',
				message: "Are you sure you want to sign out?",
				Yes:{
					color:'green-8'
				},
				cancel:{
					color:'negative'
				},
				persistent: true
			}).onOk(()=>{
        this.signOut()
        this.$router.replace('login')
			})
    },
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus">
@import '~quasar-variables-styl'
.q-footer{
  border-radius:20px 20px 0px 0px;
  box-shadow: 1px 1px 2px;
}

.view-enter-active, .view-leave-active{
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter-active{
  transition-delay: 0.5s
}

.view-enter, .view-leave-to {
  opacity: 0;
}

.view-enter-to, .view-leave{
  opacity: 1;
}

.header{
  border-radius:20px;
}
</style>