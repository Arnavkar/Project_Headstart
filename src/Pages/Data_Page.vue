<template>
	<div id = "app"> 
		<div>
			<button id="authorize_button" style="display: none;">Authorize</button>
			<button id="signout_button" style="display: none;">Sign Out</button>

			<input id="input" type="text">
			<input id="submit" type="submit">

			<pre id="content" style="white-space: pre-wrap;"></pre>
		</div>
	</div>
</template>

<script src="../assets/js/gapi.js"></script>
<script>
	
	let myScript = function() {
		var CLIENT_ID = '128246237578-qibaiukb82ubm9b3bkbb15ift36j0rvt.apps.googleusercontent.com';
		var API_KEY = 'AIzaSyAWg2IvuRzXgMU7nNCWZmRZ7DlraBMsrhc';

		var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

		var SCOPES = "https://www.googleapis.com/auth/spreadsheets";

		var authorizeButton = document.getElementById('authorize_button');
		var signoutButton = document.getElementById('signout_button');

		function handleClientLoad() {
			gapi.load('client:auth2', initClient);
		}

		function initClient() {
			gapi.client.init({
				apiKey: API_KEY,
				clientId: CLIENT_ID,
				discoveryDocs: DISCOVERY_DOCS,
				scope: SCOPES
			}).then(function () {
		// Listen for sign-in state changes.
		gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

		// Handle the initial sign-in state.
		updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
		authorizeButton.onclick = handleAuthClick;
		signoutButton.onclick = handleSignoutClick;
	}, function(error) {
		appendPre(JSON.stringify(error, null, 2));
	});
		}

		function updateSigninStatus(isSignedIn) {
			if (isSignedIn) {
				authorizeButton.style.display = 'none';
				signoutButton.style.display = 'block';
				listMajors();
				writeData();
			} else {
				authorizeButton.style.display = 'block';
				signoutButton.style.display = 'none';
			}
		}


		function handleAuthClick(event) {
			gapi.auth2.getAuthInstance().signIn();
		}

		function handleSignoutClick(event) {
			gapi.auth2.getAuthInstance().signOut();
		}


		function appendPre(message) {
			var pre = document.getElementById('content');
			var textContent = document.createTextNode(message + '\n');
			pre.appendChild(textContent);
		}

		function listMajors() {
			gapi.client.sheets.spreadsheets.values.get({
				spreadsheetId: '1cVb20kWTHXWdOaDn6oaMxMXwXqBHzlpqRDI9UAxtXQk',
				range: 'Main!B2:H',
			}).then(function(response) {
				var range = response.result;
				if (range.values.length > 0) {
					appendPre('Name, Major:');
					for (i = 0; i < range.values.length; i++) {
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
				gapi.client.sheets.spreadsheets.values.update({
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
	}


	export default{
		name: 'Data',
		components: {
		},
		mounted() {
			let gapiScript = document.createElement('script')
			gapiScript.setAttribute('src', 'https://apis.google.com/js/api.js')
			document.head.appendChild(gapiScript)
			myScript;
			// handleClientLoad();
		}
	}
</script> 
<style scoped>
#app {
	justify-content: space-between;
}
</style>