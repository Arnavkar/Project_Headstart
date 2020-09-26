<template>
	<div style="position: absolute; height: 100%; width: 100%;">  
		<!--help i want to change the colour to light nstead of primary but it doesn't show-->
		<!--  START DESIGN OF LOGIN PAGE HERE -->
			<img src="../assets/Background.png" class="background absolute-top"/>
			<div class="q-ma-md">
				<q-btn 
				flat
				@click= "goBack"
				round 
				dense 
				icon="navigate_before" 
				color="dark" 
				size="20px">
				</q-btn>
				<div class="q-px-xl q-pt-xl text-h3 text-weight-medium">Welcome</div>
				<div class="q-px-xl text-h3 text-weight-medium">Back</div>
				<div class="q-px-xl q-pt-lg text-subtitle1">We just need your email to get you back in</div>
				<br>
			</div>
		<!-- <img src="../assets/Logo.png"/>
		<q-img src="../assets/Logo.png" native-context-menu alt="Logo" basic style="height: 10px;max-width: 10px;o"> </q-img> -->
			<!-- <div class="curved">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path fill="#FFF" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,154.7C672,128,768,96,864,112C960,128,1056,192,1152,224C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
			</svg>
			</div> -->
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
				</q-form>
                <div>
                    <q-btn 
                    :loading="loading1" 
                    color="white" 
                    text-color="dark"
                    @click="simulateProgress(1)" 
                    v-on:click="handleAuthClick" 
                    label="Login" 
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
                    label="Sign Up" 
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
					gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
					updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
					
					function updateSigninStatus(isSignedIn) {
						console.log(isSignedIn);
						if (isSignedIn) {
							readData();
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
}

.curved{
	background: transparent;
	position: relative;
	bottom:27%;
	z-index: -1;
}

.curved svg{
	display: block;
	width: 100vw;
	height: 50vh;
}

.background{
	height: 100%;
	width: 102%;
	z-index: -100;
	opacity: 80%;
}

</style>