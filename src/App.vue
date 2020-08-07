<template>
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
  import Content from './components/Content.vue'
  import Navbar from './components/Navbar.vue'

  export default{
    name: 'App',
    components: {
      Content,
      Navbar
    }
  }
  
</script>

<!--  
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

 -->