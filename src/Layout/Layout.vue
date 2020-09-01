<template>
  <div id= "app" >
    <q-layout view="hHh lpR fFf">
      <q-page-container>
        <transition name = "view">
          <router-view></router-view>
        </transition>
      </q-page-container>

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

    </q-layout>
  </div>
</template>

<script>

export default {
  data () {
    return {
      navs:[
        {
          icon: "home",
          label:"Home",
          to:"/",
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
      ]
    } 
  },
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
</style>