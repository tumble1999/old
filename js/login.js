//$(function() {
var client_id = "5e3c61e98754f21cee4d";
var state = getQueryVariable('state');
var ref = getQueryVariable('ref');
if (state == "bZ0TyBHhOCS6goHFQ8qj") {
	var code = getQueryVariable('code');
	ref = localStorage.getItem('ref');
	console.log("code:" + code);
	$.getJSON('https://tumble1999-login.herokuapp.com/authenticate/' + code, function (data) {
		localStorage.setItem("loggedIn", "true");
		localStorage.setItem("access_token", data.token);

		/*var url = "https://api.github.com/user?access_token=" + data.token + "&client_id=" + client_id + "&callback=?";
		$.getJSON(url, function(currentUser) {
			localStorage.setItem("loggedInUser", currentUser.data.login);
			console.log("currentUser.data.login: " + currentUser.data.login);
		 });*/
		window.location.replace(ref);
	});
} else {
	localStorage.setItem("ref", ref);
	window.location.replace('https://github.com/login/oauth/authorize?client_id=' + client_id + '&allow_signup=true&redirect_uri=http://tumble1999.github.io/login&state=bZ0TyBHhOCS6goHFQ8qj');
}
});

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split('&');

	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');

		if (pair[0] === variable) {
			return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
		}
	}
}
