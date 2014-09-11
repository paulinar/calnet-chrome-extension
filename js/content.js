// Javascript File

var username = "johndoe";
var password = "mypassword";

function getCredentials() {
	/* Sets username and password to username and password.
	 * Return true if found, else false
	 * */
	 username = localStorage.getItem("username");
	 password = localStorage.getItem("password");

	 if (username && password) {
	 	return true;
	 } else {
	 	return false;
	 }

}

function setCredentials(username, password) {
	localStorage.setItem("username", username);
	localStorage.setItem("password", password);
}

$(document).ready(function() {

	console.log("Welcome to the CalNet Autologin Extension");

	var hasCredentials = getCredentials();

	if (hasCredentials) {
		// set the credentials
		$("input#username").val(username);
		$("input#password").val(password);
	}

});

