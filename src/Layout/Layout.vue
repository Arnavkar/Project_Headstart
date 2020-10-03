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
        class="bg-light text-dark nav_bar" inline-label indicator-color="transparent" align="justify">
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
          <q-item header>
            <q-item-section thumbnail class="q-py-md q-mb-lg">
            <img src="../assets/Logo.svg" class="logo q-mt-lg q-mr-md q-pa-none"/>
            </q-item-section>
          </q-item>

          <q-item
          clickable
          bordered
          class="text-dark">
            <q-item-section avatar>
              <q-icon name="account_circle"/>
            </q-item-section>
            <q-item-section>
              Account Information
            </q-item-section>

            <q-menu
            fit
            anchor="bottom right"
            self="top right">
              <q-form>
                <div class="row q-pa-md">
                  <div class="column">
                    <q-input
                      filled
                      outlined
                      dense
                      color="primary"
                      v-model="email"
                      label="Email"
                      style="padding-bottom:15px;"
                      :disable="disable"
                    >
                      <template v-slot:before>
                      <q-icon name="mail" color="primary"/>
                      </template>
                    </q-input>
                    <q-input
                      filled
                      outlined
                      dense
                      color="primary"
                      v-model="text"
                      label="Name"
                      :disable="disable" 
                    >
                      <template v-slot:before>
                      <q-icon name="mdi-card-account-details" color="primary"/>
                      </template>
                    </q-input>
                  </div>
                  <q-btn
                    color="grey"
                    label="Edit"
                    no-caps
                    push
                    size="md"
                    class="q-ml-lg"
                    style="max-height:4em; border-radius:15px;"
                    @click="toggle()"
                  />
                </div>
                <!-- change cancel to save when enabled -->
                <div class="btn">
                <q-btn
                  color="negative"
                  label="Cancel"
                  push
                  stretch
                  size="md"
                  class="q-my-md"
                  v-close-popup
                  style="border-radius:15px !important; "
                />
                <q-btn
                  color="positive"
                  label="Save"
                  push
                  stretch
                  text-color="dark"
                  size="md"
                  class="q-my-md"
                  style="border-radius:15px !important; "
                  v-close-popup
                />
                </div>
              </q-form>
            </q-menu>

          </q-item>

          <q-item
            class="text-dark"
            v-for="tab in drawerTabs"
            :key="tab.label"
            :to="tab.to"
            :class="tab.class"
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
            class="text-dark"
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
      disable: true,
      text: JSON.parse(localStorage.getItem("userInfo")).Name,
      email: JSON.parse(localStorage.getItem("userInfo")).Email,
      // text: {UserName},
      // email: {UserEmail},
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
          icon: "favorite",
          label:"saved",
          to: "/b/history",
          activeClass: "white-oval"
        }
      ],
      drawerTabs:[
        // {
        //   icon: "account_circle",
        //   label: "Account Information",
        //   to: "/b/profile"
        // },
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
        },
        {
          icon: "star",
          label: "Add Items (exclusive)",
          to: "/n/add_item",
          class:"exclusive"
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
    },
    toggle(){
      this.disable=!this.disable
    }
  }
}
</script>

<style lang="stylus"> 
@import '~quasar-variables-styl'

.q-footer{
  border-radius:20px 20px 0px 0px;
}

a.q-tab {
  transition: all 0.3s ease;

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

a.q-tab{
  transition: all 0.3s;
}

.bg-light {
  background: #C3EFDB;
}

.white-oval{
  border-radius: 10vw;
  background: white;
}

.exclusive{
  background: #C3EFDB;
}

.nav_bar{
  padding: 1vw;
}

.logo{
  position: absolute;
  right: 0%;
  width: 10em;
  height: 6em;
  z-index:1;
}

.btn{
  display: inline-flex;
  width: 100%;
  justify-content: space-evenly;
}

</style>