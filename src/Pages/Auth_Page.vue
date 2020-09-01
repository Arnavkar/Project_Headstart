<template>
	<q-page class="q-pa-sm">
		<SettingsButton/>
		<div>
			<button id="authorize_button" style="display: none;" v-on:click="handleAuthClick">Authorize</button>
			<button id="signout_button" style="display: none;" v-on:click="handleSignoutClick">Sign Out</button>

			<input id="input" type="text">
			<input id="submit" type="submit">

			<pre id="content" style="white-space: pre-wrap;"></pre>
		</div>
	</q-page>
</template>

<script>
	function appendPre(message) {
		var pre = document.getElementById('content');
		var textContent = document.createTextNode(message + '\n');
		pre.appendChild(textContent);
	}

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
					rating: row[6]
				})
			}
		} else {
			console.log("No data present")
		}
	return database
	}

	import SettingsButton from '../components/Settings_Button.vue'
	import Vue from 'vue'
	import { mapActions } from "vuex"
	
	export default{
		name: 'Data',
		components: {
			SettingsButton
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
							if (range.values.length > 0) {
								for (var i = 0; i < range.values.length; i++) {
									var row = range.values[i];
									appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] + ', ' + row[4] + ', ' + row[5] + ', ' + row[6]);
								}
							} else {
								appendPre('No data found.');
							}
						}, function(response) {
							console.log('Error: ' + response.result.error.message);
						});
					}

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
				this.isSignedIn;
			},
			handleSignoutClick: function () {
				this.$gapi.logout()
				this.isSignedIn;
			},
		},
		mounted() {
			this.login()
			var database = JSON.parse(localStorage.getItem('database'))
			this.addDatabase(database);
		},
	}
</script> 
<style scoped>
#app {
	justify-content: space-between;
}
</style>