<template>
	<div class = "absolute-top background">  
		<!--  START DESIGN OF LOGIN PAGE HERE -->
			<img src="../assets/bg1.png" class="background absolute-top"/>
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
			</div>
			<div class="textblock">
			<div class="q-px-xl text-h4 text-dark text-weight-medium">Welcome</div>
			<div class="q-px-xl text-h4 text-dark text-weight-medium">Back</div>
			<div class="q-px-xl q-pt-md text-dark text-body2">We just need your email to get you back in</div>
			</div>
			<svg class="curved" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path fill="#FFF" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,154.7C672,128,768,96,864,112C960,128,1056,192,1152,224C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
			</svg>
			<div class="q-pa-lg white-block">
                <div class= "absolute-bottom content">
                    <q-btn 
                    :loading="loading1" 
                    text-color="dark"
                    @click="simulateProgress(1)" 
                    v-on:click="handleAuthClick" 
                    label="Login" 
                    class = "q-pa-m q-mt-lg fixed-bottom login"/>
				</div>
			</div>
	</div>
</template>
<script>
	
	function createLocalDatabase(range){
		var database = {};
		if(range.values.length > 0){
			for (var i = 0; i < range.values.length; i++){
				var row = range.values[i]
				var barcode = row[0].toString();
				if(row[1]==""){
					row[1] = "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101029/112815932-stock-vector-no-image-available-icon-flat-vector-illustration.jpg?ver=6"
				}
				Vue.set(database,barcode, {
					barcode: barcode,
					image: row[1],
					name: row[2],
					category: row[3],
					price:row[4],
					m1:row[5],
					m2:row[6],
					m3:row[7],
					p1:row[8],
					p2:row[9],
					p3:row[10],
					i1:row[11],
					i2:row[12],
					i3:row[13],
					i4:row[14],
					rating: parseInt(row[15]),
					additional: row[16]
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
							range: 'Database!A3:Q100',
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

			handleAuthClick: function (){
				this.$gapi.login();

				setTimeout(() => {
				this.$router.push('/b/home')
				}, 2000)

				this.isSignedIn;
			},
			
			handleSignoutClick(){
				this.$gapi.logout()

				setTimeout(() => {
				this.$router.push('')
				}, 2000)

				this.isSignedIn;
			},

			goBack(){
				this.$router.go(-1)
			},
			simulateProgress (number) {
				// we set loading state
				this[`loading${number}`] = true
				// simulate a delay
				setTimeout(() => {
				// we're done, we reset loading state
				this[`loading${number}`] = false
				}, 7)
			}
		},
		mounted() {
			var database = JSON.parse(localStorage.getItem('database'))
			this.addDatabase(database);

			bus.$on("sign-out", () => {
				this.handleSignoutClick()
			})

			bus.$on("sign-up",() => {
				this.handleAuthClick()
			})
		},
	}
</script> 

<style scoped>

.background{
	/* background-image:url("../assets/welcomeBack.svg" ); */
    background-size:100vw auto;
    background-repeat: no-repeat;
	width:100vw;
    height:100vh;
	z-index: -10;
}
.login{
	width:90vw;
	height:50px;
	font-size:20px;
	border-radius:10px;
	margin-bottom:40px;
	position:relative;
	background-color:#C3EFDB;
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
	bottom: 0vh;
	width: 100%;
	height: 50%;
}

.curved{
	background: transparent;
	position: absolute;
	bottom:50%;
	z-index: -1;
	margin:-1;
}

.content{
    display:flex;
    flex-direction: column;
    align-items:center;
}

.textblock{
	position: absolute;
	top: 15vh;
}

</style>