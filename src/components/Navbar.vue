<template>
	<div class = "nav" id = 'navbar'>
		<span class="material-icons" id = "icons"> home </span>
		<span class="material-icons" id = "icons"> camera</span>
		<span class="material-icons" id = "icons"> account_circle </span>
	</div>
</template>

<style>

#navbar {

  width:373px;
  height: 44px;
  top:-61px;
  left:180px;
  display: flex;
  position:relative;
  border-radius: 0px 0px 30px 30px;
  padding: 15px 0px 0px 0px;
  justify-content: center;
  background-color: rgb(0,117,40);
  border-style:solid;
  border-width:1px;
}

#icons {
	padding: 0px 20px 0px 20px;
  font-size: 30px;
  color: rgba(0,0,0)
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: local('Material Icons'), local('MaterialIcons-Regular'), url(https://fonts.gstatic.com/s/materialicons/v7/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: 20px;
  font-style: normal;
  padding-right:1em;
  font-size: 18px;
  color: rgba(0,0,0,0.5)
}

</style>