$(document).ready(function() {
	  $.ajax({
    	url: 'http://api.giphy.com/v1/gifs/search?q=pizza&api_key=dc6zaTOxFJmzC',
    	method: 'GET'
    })
   	.done(render);

});

var render = function(response){
	debugger;
}

