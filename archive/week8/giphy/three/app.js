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

	//with a for loop
	//for every object in the response data array
	//  -create a new image tag 
	//	-grab the fixed-height url //go to one.html look at the json
	// 	-set the img src to the url
	//	-append the img to the wrapper

	for(var i=0; i < response.data.length; i++){
		var url = response.data[i].images.fixed_height.url
		console.log(url);
	
		$('.wrapper').append($('<img>').attr('src', url));
	}
	
}


