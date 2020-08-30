<template>
  <div class = "nav" id = 'navbar'>
    <span class="material-icons icons"> home nnn </span> 
    <!-- why does the adding the nnns work -->
    <router-link to="/">
      <span class="material-icons icons"> account_circle </span>
    </router-link> 
  </div>
    <!-- <router-view/> -->
    <!-- <router-link to="/Profile"></router-link> -->
    
</template>

<style lang = "scss" scoped>

#navbar {
  display: flex;
  position: absolute;
  width:377px;
  top:740px;
  padding: 15px 0px 15px 0px;
  justify-content: center;
  background-color: rgba(255,255,255,0);
}

.icons {
	padding: 0px 20px 0px 20px;
  font-size: 40px;
  color: rgb(255,255,255);
}


</style>