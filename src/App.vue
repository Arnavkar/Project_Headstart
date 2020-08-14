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
</script> -->


<!-- Item Scanning Page -->

<!-- <template>
  <div id = "app">
    <ItemScanner/>
    <Navbar/>
  </div>
</template>

<script>
  import ItemScanner from './components/ItemScanner.vue'
  import Navbar from './components/Navbar.vue';

  export default{
    name: 'App',
    components: {
      ItemScanner,
      Navbar
    }
  }

</script> -->

<!-- Receipt Scanning Page --> 

<template>
  <div id = "app">
    <ReceiptScanner/>
  </div>
</template>

<script>
  import ReceiptScanner from './components/ReceiptScanner.vue'

  export default{
    name: 'App',
    components: {
      ReceiptScanner,
    }
  }
</script>


<style>
  * {
    box-sizing:border-box;

  }
  #app {
    background-color: #fff;
    position: relative;
    display:flex;
    flex-direction: column;
    font-family:'Montserrat';
    margin: 0px auto;
    width: 377px;
    height: 812px;
    border: solid 1px black;
    border-radius: 30px;
    overflow: hidden;
  }

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: local('Material Icons'), local('MaterialIcons-Regular'), url(https://fonts.gstatic.com/s/materialicons/v7/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2) format('woff2');
}

  .material-icons {
    font-family: 'Material Icons';
    padding-right:1em;
    font-style: normal;
    color: rgba(0,0,0,0.5)
}
</style>








