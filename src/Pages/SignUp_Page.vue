<template>
	<div style="position: absolute; height: 100%; width: 100%;">  
		<!--help i want to change the colour to light nstead of primary but it doesn't show-->
		<!--  START DESIGN OF LOGIN PAGE HERE -->
			<img src="../assets/Background.png" class="background absolute-top"/>
			<div class="q-ma-md">
				<q-layout container style="height: 50px">
					<q-header class="bg-colorless" elevated>
						<q-toolbar>
						<q-btn 
						flat
						@click="drawerLeft = !drawerLeft"
						round 
						dense 
						icon="navigate_before" 
						color="dark" 
						style=round
						size="20px">
						</q-btn>
						</q-toolbar>
					</q-header>
				</q-layout>
			<div class="q-px-xl q-pt-xl text-h3 text-weight-medium">Create</div>
			<div class="q-px-xl text-h3 text-weight-medium">Account</div>
			<div class="q-px-xl q-pt-lg text-subtitle1">The Earth is what we all have in common.</div>
            <div class="q-px-xl text-subtitle1">-Wendell Berry</div>
			<br>
			</div>
		<!-- <img src="../assets/Logo.png"/>
		<q-img src="../assets/Logo.png" native-context-menu alt="Logo" basic style="height: 10px;max-width: 10px;o"> </q-img> -->
			<div class="q-pa-lg white-block">
				<q-form>
					<q-input
						filled
						outlined
						color="primary"
						v-model="text"
						label="Email"
                        style="padding-bottom:15px;"
					>
					<template v-slot:before>
					<q-icon name="mail" color="primary"/>
					</template>
					<!-- when email is valid -->
					<q-avatar>
					<q-icon name="done" color="primary"/>
					</q-avatar>
					<!--  -->
					</q-input>
                    <q-input
						filled
						outlined
						color="primary"
						v-model="text"
						label="Name"
					>
					<template v-slot:before>
					<q-icon name="sentiment_satisfied" color="primary"/>
					</template>
					</q-input>
				</q-form>
                <div>
                    <q-btn 
                    :loading="loading1" 
                    color="white" 
                    text-color="dark"
                    @click="simulateProgress(1)" 
                    v-on:click="handleAuthClick" 
                    label="Sign Up" 
                    class = "q-pa-m q-mt-lg fixed-bottom login"
                    style="width:100%;"/>
                

                    <text-caption class="q-pa-lg or">
                        <hr>
                        or
                        <hr>
                    </text-caption>

                    <q-btn :loading="loading1" 
                    color="first" 
                    @click="simulateProgress(1)" 
                    v-on:click="handleAuthClick" 
                    label="Login" 
                    text-color="dark"
                    class = "q-pa-m fixed-bottom login"
                    style="width: 100%"/>
				</div>
			</div>
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
				this.$router.push('home')
				}, 2000)

				this.isSignedIn;
			},
			handleSignoutClick: function () {
				this.$gapi.logout()

				setTimeout(() => {
				this.$router.push('login')
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

<style scoped>
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
hr{
   display:inline-block;
   width: 42%;
}
.or{
  display: flex;
  text-align: justify;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.white-block{
	background-color: white; 
	position: absolute;
	top: 50%;
	width: 100%;
	height: 100%;
    border-radius: 30px 30px 0px 0px;
}
.background{
	height: 100%;
	width: 100%;
	z-index: -100;
	opacity: 80%;
}
.text-first {
  color: #98D3B9;
}
.bg-first {
  background: #98D3B9;
}
.bg-colorless{
	background:rgba(255, 255, 255, 0);
}
</style>