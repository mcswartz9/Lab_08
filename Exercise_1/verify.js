function verify(){
	var password = document.getElementById("password1").value;
	var verification = document.getElementById("verify1").value;
	if ((password != verification) && (password.length < 8 || verification.length < 8)) {
		alert("Error: Passwords must be at least 8 characters long and password and verification must match!");
	} else if (password != verification) {
		alert("Error: Password and verification must match!");
	} else if (password.length < 8 || verification.length < 8) {
		alert("Error: Passwords must be at least 8 characters long!");
	}
}