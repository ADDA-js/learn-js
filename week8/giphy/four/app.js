//same ready function to start
$(document).ready(function() {
	 
	 //set an event listener to the go button
	$('.go').click(search);	
});

//move the ajax call to its own function, called search
//should accept a search term as a parameter
var search = function(){
	
	//grab the search term from the search text input 
	var term = $('.search').val() //this is the search term	
	console.log(term);
	 //call the new search function with the term as a parameter
	 //hide the search box


	//move the ajax call to its own function
	 $.ajax({
    	url: 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=dc6zaTOxFJmzC',
    	method: 'GET'
    })
   	.done(render);

}

//same as three...
var render = function(response){
	//build the elements to the dom
	//Grab the wrapper div
	var wrapper = $('.wrapper');

	//clear the wrapper
	wrapper.empty();

	//for every object in the response data array
	for(var i = 0; i < response.data.length; i++){
		//  -create a new image tag 
		var image = $('<img>');
		image.addClass('grid-item')
		//	-grab the fixed-height url
		var url = response.data[i].images.fixed_height.url;
		// 	-set the img src to the url
		image.attr('src', url);
		//	-append the img to the wrapper
		wrapper.append(image);
	}
}
