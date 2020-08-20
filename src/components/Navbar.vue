<template>
  <div class = "body">
    <div class = "nav" id = 'navbar'>
      <span class="material-icons" id = "icons"> home </span>

      <router-link to="/Scan">
        <span class="material-icons" id = "icons"> camera</span>
      </router-link> 
      
      <span class="material-icons" id = "icons"> account_circle </span>
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

#icons {
	padding: 0px 20px 0px 20px;
  font-size: 30px;
  color: rgba(0,0,0);
}

</style>