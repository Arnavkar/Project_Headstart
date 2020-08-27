<template>
	<div id = "app"> 
		<Content
		Name= 'Arnav Shirodkar'
		email= 'arnavshirodkar@gmail.com'
		mobile= '93893864'
		dob= '04/11/1998'
		gen= 'Male'
		bank= 'POSB 257 - XXX - XXXX' />
		<NavbarProfile/>
	</div>
</template>

<script>
	import Content from '../components/Content.vue';
	import NavbarProfile from '../components/Navbar.vue';

	export default{
		name: 'Profile_Page',
		components: {
			Content,
			NavbarProfile
		}
	}
</script> 
