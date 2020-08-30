var CLIENT_ID = '128246237578-qibaiukb82ubm9b3bkbb15ift36j0rvt.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAWg2IvuRzXgMU7nNCWZmRZ7DlraBMsrhc';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
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

/**
*  Sign in the user upon button click.
*/
function handleAuthClick(event) {
	gapi.auth2.getAuthInstance().signIn();
}

/**
*  Sign out the user upon button click.
*/
function handleSignoutClick(event) {
	gapi.auth2.getAuthInstance().signOut();
}

/**
* Append a pre element to the body containing the given message
* as its text node. Used to display the results of the API call.
*
* @param {string} message Text to be placed in pre element.
*/
function appendPre(message) {
	var pre = document.getElementById('content');
	var textContent = document.createTextNode(message + '\n');
	pre.appendChild(textContent);
}

/**
* Print the names and majors of students in a sample spreadsheet:
* https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
*/
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
// Print columns A and E, which correspond to indices 0 and 4.
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