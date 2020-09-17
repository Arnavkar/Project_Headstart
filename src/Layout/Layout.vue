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
          <q-btn dense flat color="dark" round icon="keyboard_arrow_left" @click= "goBack" size = "20px" /> 
          <q-toolbar-title style="display:flex; justify-content:center;">
            <portal-target name="header"></portal-target>
          </q-toolbar-title>
          <q-btn dense flat color="dark" round icon="signal_cellular_alt" size = "20px" @click="right = !right"  class="rotate-270"/>
        </q-toolbar>
      </q-header>

      <q-footer>
        <q-tabs
        class="bg-light text-viridian nav_bar" inline-label indicator-color="transparent" align="justify">
          <q-route-tab
          clickable
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :active-class="nav.activeClass"
          v-bind:label="nav.label"/>
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
          to:"/b/home",
          activeClass: "white-oval",
        },
        {
          icon:"mdi-barcode-scan",
          label:"scan",
          to:"/b/scanner",
          activeClass: "white-oval"
        },
        {
          icon: "list",
          label:"Data",
          to: "/b/data",
          activeClass: "white-oval"
        },
        {
          icon: "favorite",
          label:"saved",
          to: "/b/history",
          activeClass: "white-oval"
        }
      ],
      drawerTabs:[
        {
          icon: "account_circle",
          label: "Account Information",
          to: "/b/profile"
        },
        {
          icon: "contact_support",
          label: "FAQ",
          to: "/b/FAQ"
        },
        {
          icon: "info",
          label: "Product Request",
          to: "/n/product_request"
        },
        {
          icon: "announcement",
          label: "Update Item Information",
          to: "/n/update_info"
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
        this.$router.replace('/')
			})
    },
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" primary>
@import '~quasar-variables-styl'

.q-footer{
  border-radius:20px 20px 0px 0px;
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

.q-header{
  border-radius:0px 0px 30px 30px;
  border-bottom-style:solid;
  border-bottom-width:1px;
}

.bg-light {
  background: #C3EFDB;
}

.text-viridian{
  color: #3B8171
}

.bg-viridian{
  background: #3B8171
}

.white-oval{
  border-radius: 10vw;
  background: white;
}

.nav_bar{
  padding: 1vw;
}

.nav_bar a{
  padding: 1vw 4vw;
}
</style>