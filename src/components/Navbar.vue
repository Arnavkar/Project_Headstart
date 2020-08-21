<template>
  <div class="body">
    <div class="nav" id='navbar'>
      <router-link to="/">
        <span class="material-icons icons"> home </span>
      </router-link>

      <router-link to="/Scan">
        <span class="material-icons icons"> camera</span>
      </router-link> 
      
      <span class="material-icons icons"> account_circle </span>
    </div>
  </div>
</template>

<style scoped>
.body{
  align-items: center;

}

.nav {
  display: flex;
  padding: 15px 0px 15px 0px;
  justify-content: center;
  background-color: rgba(0,117,40,255);
}

.icons {
	padding: 0px 20px 0px 20px;
  font-size: 30px;
  color: rgba(0,0,0);
}

</style>