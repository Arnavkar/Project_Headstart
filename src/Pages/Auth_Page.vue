<template>
	<div>
		<!--  START DESIGN OF LOGIN PAGE HERE -->

		<img src="../assets/logo.jpeg"/>
		<q-img src="../assets/logo.jpeg"/>
		<q-btn :loading="loading1" color="secondary" @click="simulateProgress(1)" v-on:click="handleAuthClick" label="Login" class = "q-ma-md fixed-bottom login" />
		
		
		
		

		<!--  END DESIGN OF LOGIN PAGE HERE -->

		<!-- USED TO WRITE DATA -->
		<!-- <input id="input" type="text">
		<input id="submit" type="submit"> -->
		<!-- <pre id="content" style="white-space: pre-wrap;"></pre> -->
	</div>
</template>
<script>
	function createLocalDatabase(range){
		var database = {};
		if(range.values.length > 0){
			for (var i = 0; i < range.values.length; i++){
				var row = range.values[i]
				var barcode = row[0].toString();
				if(row[3]==""){
					row[3] = "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101029/112815932-stock-vector-no-image-available-icon-flat-vector-illustration.jpg?ver=6"
				}
				Vue.set(database,barcode, {
					name: row[1],
					barcode: barcode,
					image: row[3],
					POM:row[5],
					manufacturer:row[4],
					rating: row[6],
					additional: ""
				})
			}
		} else {
			console.log("No data present")
		}
	return database
	}
	
	import Vue from 'vue'
	import { mapActions } from "vuex"
	import { bus } from '../main'
	
	export default{
		name: 'Data',
		data(){
			return{
				loading1:false
			}
		},
		methods: {
			...mapActions('database',['addDatabase']),
			login() {
				this.$gapi.getGapiClient().then((gapi) => {
					var authorizeButton = document.getElementById('authorize_button');
					var signoutButton = document.getElementById('signout_button');
					gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
					updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
					
					function updateSigninStatus(isSignedIn) {
						console.log(isSignedIn);
						if (isSignedIn) {
							authorizeButton.style.display = 'none';
							signoutButton.style.display = 'block';
							readData();
							// writeData();
						} else {
							authorizeButton.style.display = 'block';
							signoutButton.style.display = 'none';
						}
						return isSignedIn
					}

					function readData() {
						gapi.client.sheets.spreadsheets.values.get({
							spreadsheetId: '1cVb20kWTHXWdOaDn6oaMxMXwXqBHzlpqRDI9UAxtXQk',
							range: 'testsheet!A3:G25',
						}).then(function(response) {
							var range = response.result;
							localStorage.setItem('database',JSON.stringify((createLocalDatabase(range))))
						}, function(response) {
							console.log('Error: ' + response.result.error.message);
						});
					}

					//function initializeScanner(){} = >PREVENT MULTIPLE INITIALIZATIONS OF THE SCANDIT SDK?

					// function writeData() {
					// 	var button = document.getElementById('submit');

					// 	button.onclick = function() {
					// 		var val1 = document.getElementById('input').value;
					// 		logData(val1);
					// 	}
					// 	function logData(data) {
					// 		var values = [
					// 		[data, data, data, data],
					// 		];
					// 		var body = {
					// 			values: values
					// 		};
					// 		gapi.client.sheets.spreadsheets.values.append({
					// 			spreadsheetId: '1cVb20kWTHXWdOaDn6oaMxMXwXqBHzlpqRDI9UAxtXQk',
					// 			range: 'Users!A7:E',
					// 			valueInputOption: "USER_ENTERED",
					// 			resource: body
					// 		}).then((response) => {
					// 			var result = response.result;
					// 			console.log(`${result.updatedCells} cells updated.`);
					// 		});
					// 	}
					// }
				}, function(error) {
					console.log(JSON.stringify(error, null, 2));
				});
			},
			handleAuthClick: function () {
				this.$gapi.login();

				setTimeout(() => {
				this.$router.push('/b/home')
				}, 2000)

				this.isSignedIn;
			},
			handleSignoutClick: function () {
				this.$gapi.logout()

				setTimeout(() => {
				this.$router.push('')
				}, 2000)

				this.isSignedIn;
			},
			simulateProgress (number) {
				// we set loading state
				this[`loading${number}`] = true
				// simulate a delay
				setTimeout(() => {
				// we're done, we reset loading state
				this[`loading${number}`] = false
				}, 3000)
			}
		},
		mounted() {
			this.login()
			var database = JSON.parse(localStorage.getItem('database'))
			this.addDatabase(database);

			bus.$on("sign-out", () => {
			this.handleSignoutClick()
			})
		},
	}
</script> 

<style  scoped>
#app {
	justify-content: space-between;
}
.login{
	width:250px;
	height:50px;
	font-size:20px;
	border-radius:30px;
	position:relative;
}

</style>