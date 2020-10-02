<template>
	<div style="absolute-top background">  
		<img src="../assets/bg2.png" class="background absolute-top"/>
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
			<div class="textblock">
				<div class="q-px-xl text-h4 text-dark text-weight-medium">Create</div>
				<div class="q-px-xl text-h4 text-dark text-weight-medium">Account</div>
				<div class="q-px-xl q-pt-lg text-dark text-body2">The Earth is what we all have in common.</div>
				<div class="q-px-xl text-dark text-body2">-Wendell Berry</div>
			</div>
		</div>
		<div style="display:flex; flex-direction:column;">
			<svg class="curved" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path fill="#FFF" fill-opacity="1" d="M0,192L80,192C160,192,320,192,480,170.7C640,149,800,107,960,96C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
			</svg>
			<div class="q-pa-lg white-block fixed-bottom">
				<q-form
				@submit="onSubmit">
					<q-input
						filled
						outlined
						color="primary"
						v-model="email"
						label="Email"
						name="Email"
						style="padding-bottom:15px;"
						:rules="[ val => val&&val.length > 0 || 'Please enter an email']"
					>
					<template v-slot:before>
					<q-icon name="mail" color="primary"/>
					</template>
					<!-- when email is valid -->
					<!-- <q-avatar>
					<q-icon name="done" color="primary"/>
					</q-avatar> -->
					<!--  -->
					</q-input>
					<q-input
						filled
						outlined
						v-model="text"
						color="primary"
						label="Name"
						name="Name"
						:rules="[ val => val&&val.length > 0 || 'Please enter your name']"
					>
					<template v-slot:before>
					<q-icon name="mdi-card-account-details" color="primary"/>
					</template>
					</q-input>
					<div>
						<div class="q-py-lg text-dark text-body1"> How much more are you willing to pay for a more sustainable product?</div>
						<q-slider
							v-model="value"
							:min="0"
							:max="10"
							:step="0.5"
							label
							label-always
							:label-value="'$' + value"
							color="primary"
							name="priceRange"
						/> 
						<q-btn 
						:loading="loading1" 
						color="positive" 
						text-color="dark"
						@click="simulateProgress(1)" 
						v-on:click="handleAuthClick"
						label="Sign Up" 
						type="submit"
						class = "q-pa-m q-mt-md fixed bottom login"/>
					</div>
				</q-form>
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
				loading1:false,
				email:null,
				text:null,
				value:0,
			}
		},
		methods: {
			...mapActions('info',['createUser']),
			...mapActions('database',['addDatabase']),

			onSubmit (evt) {
				this.$q.notify({
				color: 'green-4',
				textColor: 'white',
				icon: 'cloud_done',
				message: 'Submitted'
				})
				
				const formData = new FormData(evt.target)
				
				var today = new Date();
				var dd = String(today.getDate()).padStart(2, '0');
				var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
				var yyyy = today.getFullYear();

				today = mm + '/' + dd + '/' + yyyy;

				const userInfo = {
					Name:"",
					Email:"",
					priceRange:0,
					firstTime:true,
					scanTally:0,
					itemInfoTally:0,
					itemRequestTally:0,
					signUpDate:today
				}

				for (const [ name ,value ] of formData.entries()) {
						userInfo[name] = value
				}
			this.createUser(userInfo)
			var firstTime = {firstTime:true}
			localStorage.setItem('userInfo',JSON.stringify(userInfo))
			localStorage.setItem('firstTime', JSON.stringify(firstTime))

			bus.$emit('sign-up')
			},

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
			this.login()
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
    box-shadow: 0 2px 4px 0 rgba(65, 184, 131, 0.4), 0 3px 10px 0 rgba(65, 184, 131, 0.19);
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
}

.curved{
	background: transparent;
	position: absolute;
	bottom:50%;
	z-index: -1;
	margin:-1;
}

.textblock{
	position: absolute;
	top: 20vh;
}

</style>