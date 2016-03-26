//Same as Two to start
$(document).ready(function() {
	  $.ajax({
    	url: 'http://api.giphy.com/v1/gifs/search?q=pizza&api_key=dc6zaTOxFJmzC',
    	method: 'GET'
    })
   	.done(render);
});

var render = function(response){
	//build the elements to the dom
	//Grab the wrapper div
	//for every object in the response data array
	//  -create a new image tag 
	//	-grab the fixed-height url
	// 	-set the img src to the url
	//	-append the img to the wrapper
}


