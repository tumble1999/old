$(function() {
	
	var state = getQueryVariable('state');
	if (state=="bZ0TyBHhOCS6goHFQ8qj") {
		var authCode = getQueryVariable('code');
		//var acJson = getAccessToken('dce7328a9a7ea4492070', '32a13ccd5f5d63f86229d1df56b4e4893e48f8f4', code, state);
		$.getJSON('https://tumble1999-login.herokuapp.com/authenticate/'+code, function(data) {
		 console.log(data.token);
		});
	} else {
		window.location.replace('https://github.com/login/oauth/authorize?client_id=dce7328a9a7ea4492070&allow_signup=true&redirect_uri=http://tumble1999.github.io/login&state=bZ0TyBHhOCS6goHFQ8qj');
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
