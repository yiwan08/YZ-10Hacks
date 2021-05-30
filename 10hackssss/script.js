//window.logout = function() {

	// TELLS OUR SERVER TO LOG THE USER OUT
	//fetch('/~/DailyFoodGuide/logout', { method: 'POST'});
	
	// TELLS OUR BROWSER TO SHOW A MESSAGE TO OUR USER
	//alert('Logged Out!');
	
	// REDIRECTS THE USER TO THE HOMEPAGE
	//location.href = '/~/DailyFoodGuide/index'
//}

window.logout = function() {
	fetch('/~/projects/10hackssss/logout', { method: 'POST'});
	alert('Logged Out!')
	location.href = '/~/projects/10hackssss'
}