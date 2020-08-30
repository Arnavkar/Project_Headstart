<template>
  <div id= "app" >
    <q-layout view="hHh lpR fFf">

      <q-page-container>
        <router-view></router-view>
      </q-page-container>

      <q-footer>
        <q-tabs
        color="#1D9529">
          <q-route-tab 
          class="text-dark"
          exact clickable
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon" />
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
        },
        {
          icon:"party_mode",
          label:"camera",
          to:"/scanner",
        },
        {
          icon: "list",
          label: "Data",
          to: "/data",
          size:"18px"
        },
        {
          icon: "favorite",
          label: "history",
          to: "/history",
          size:"18px"
        }

      ]
    } 
  },
}
</script>

<style lang="stylus">
@import '~quasar-variables-styl'

.q-footer .q-router-link--exact-active {
    color: #1D9529 !important;
}

</style>