<template>
	<div id = "app"> 
		{{ username }}
		<input type="text" id="username-input" placeholder="username">
		<input type="text" id="email-input" placeholder="email">
		<input type="text" id="mobile-input" placeholder="mobile">
		<input type="text" id="dob-input" placeholder="dob">
		<input type="text" id="gen-input" placeholder="gen">
		<input type="text" id="bank-input" placeholder="bank">
		<button @click="setUserData">Set Name</button>
		<NavbarProfile/>
	</div>
</template>

<script>
	import NavbarProfile from '../components/Navbar.vue';

	export default{
		name: 'Data_Page',
		components: {
			NavbarProfile
		}, 
		computed: {
			username() {
				return this.$store.getters.getName
			}
		},
		watch: {
			username(newName) {
				this.$store.username = newName;
			}
		},
		methods: {
			setUserData() {
				var currentName = document.getElementById("username-input").value;
				var currentEmail = document.getElementById("email-input").value;
				var currentMobile = document.getElementById("mobile-input").value;
				var currentDob = document.getElementById("dob-input").value;
				var currentGen = document.getElementById("gen-input").value;
				var currentBank = document.getElementById("bank-input").value;
				var mutation = {
					'currentName': currentName,
					'currentEmail': currentEmail,
					'currentMobile': currentMobile,
					'currentDob': currentDob,
					'currentGen': currentGen,
					'currentBank': currentBank
				}
				this.$store.commit('setUserData', mutation)
				localStorage.setItem('appData', JSON.stringify(mutation));
			},
		}
	}
</script> 

<style>
input {
	height: 60px;
}
#app {
	justify-content: center;
}
button {
	margin-bottom: 60px;
}
</style>