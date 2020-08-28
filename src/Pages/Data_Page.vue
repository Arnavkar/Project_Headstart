<template>
	<div id = "app"> 
		<div>
			<button id="authorize_button" style="display: none;" v-on:click="handleAuthClick">Authorize</button>
			<button id="signout_button" style="display: none;" v-on:click="handleSignoutClick">Sign Out</button>

			<input id="input" type="text">
			<input id="submit" type="submit">

			<pre id="content" style="white-space: pre-wrap;"></pre>
		</div>
	</div>
</template>

<script>

	function appendPre(message) {
		var pre = document.getElementById('content');
		var textContent = document.createTextNode(message + '\n');
		pre.appendChild(textContent);
	}

	export default{
		name: 'Data',
		components: {
		},
		methods: {
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
							writeData();
						} else {
							authorizeButton.style.display = 'block';
							signoutButton.style.display = 'none';
						}
						return isSignedIn
					}
					function readData() {
						gapi.client.sheets.spreadsheets.values.get({
							spreadsheetId: '1cVb20kWTHXWdOaDn6oaMxMXwXqBHzlpqRDI9UAxtXQk',
							range: 'Main!B2:H',
						}).then(function(response) {
							var range = response.result;
							if (range.values.length > 0) {
								appendPre('Name, Major:');
								for (var i = 0; i < range.values.length; i++) {
									var row = range.values[i];
									appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] + ', ' + row[4]);
								}
							} else {
								appendPre('No data found.');
							}
						}, function(response) {
							appendPre('Error: ' + response.result.error.message);
						});
					}

					function writeData() {
						var button = document.getElementById('submit');

						button.onclick = function() {
							var val1 = document.getElementById('input').value;
							logData(val1);
						}
						function logData(data) {
							var values = [
							[data, data, data, data],
							];
							var body = {
								values: values
							};
							gapi.client.sheets.spreadsheets.values.append({
								spreadsheetId: '1cVb20kWTHXWdOaDn6oaMxMXwXqBHzlpqRDI9UAxtXQk',
								range: 'Users!A7:E',
								valueInputOption: "USER_ENTERED",
								resource: body
							}).then((response) => {
								var result = response.result;
								console.log(`${result.updatedCells} cells updated.`);
							});
						}

					}


				}, function(error) {
					appendPre(JSON.stringify(error, null, 2));
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
		computed: {
			
		},

		mounted() {
			

			this.login()
		},
	}
</script> 
<style scoped>
#app {
	justify-content: space-between;
}
</style>