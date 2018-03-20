$(document).ready(function() {
	 //set an event listener to the go button


	 $('.go').click(function(){
		//grab the search term from the search text input 	
		
	 	//call the new search function with the term as a parameter
	 	
	 })
});

//function, search(term)
//make an ajax call to the omdb api using the search term.
//on done, call the render function

//function, render(response)
//render the response to the wrapper

//first, clear out the contents of the wrapper
//use the reponse object to create the following content
//h1, set the contents to the movie title
//append to the result

//h2, set the contents to the movie year
//append to the result

//paragraph, set contents to "Director: " + the directors name
//append to the result

//paragraph, set contents to "Actors: " + the directions name
//append to the result

//paragraph, set contentes to the plot

//Bonuse, if the movie received an award, put a start next to the title.