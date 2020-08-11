<!-- Profile Page -->
<!-- <template>
  <div id = "app">
    <Content
      Name= 'Arnav Shirodkar'
      email= 'arnavshirodkar@gmail.com'
      mobile= '93893864'
      dob= '04/11/1998'
      gen= 'Male'
      bank= 'POSB 257 - XXX - XXXX'
    />
    <Navbar/>
  </div>
</template>

<script>
  import Content from './components/Content.vue';
  import Navbar from './components/Navbar.vue';

  export default{
    name: 'App',
    components: {
      Content,
      Navbar
    }
  }
</script>
 -->

<!-- Scanning Page -->
<template>
  <div id = "app">
    <vuecam/>
    <Navbar/>
  </div>
</template>

<script>
  import vuecam from './components/my-vue-camera.vue'
  import Navbar from './components/Navbar.vue';

  export default{
    name: 'App',
    components: {
      vuecam,
      Navbar
    }
  }

</script>