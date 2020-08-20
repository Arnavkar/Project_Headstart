<template>
  <div id = "app"> 
    <router-view> </router-view>
  </div>
</template>

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
    width: 1280width;
    height: 800px;
    border: solid 1px black;
    border-radius: 30px;
    overflow: hidden;
  }

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: local('Material Icons'), local('MaterialIcons-Regular'), local('MaterialIcons-Outlined'), url(https://fonts.gstatic.com/s/materialicons/v7/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2) format('woff2');
}

  .material-icons {
    font-family: 'Material Icons';
    padding-right:1em;
    font-style: normal;
    color: rgba(0,0,0,0.5)
}
</style>




