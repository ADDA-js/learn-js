//once the page is loaded,
//hit the giphy api and get some json
//append the images on the screen

$(document).ready(function(){
	//using ajax to hit an api
	var link = 'http://api.giphy.com/v1/gifs/search?q=pizza&api_key=dc6zaTOxFJmzC';

	$.ajax({
		url: link,
		method: 'GET' //this is just asking the server for data 
	}).done(render); //.done wants a callback function


})

//this is our callback function
//one parameter, the response from the server
var render = function(response){
	debugger;
}