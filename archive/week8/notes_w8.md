# Week 7 - JS

## Objectives
- I can understand when and how to use jQuery.
- I can use an external api to retrieve data.

## Do Now

## Mini-Lesson: APIs and JSON
### API
- API (application program interface)
- APIs allow us to interact with other servers and programs.
- Many different APIs exist, ex. twitter, instagram, pinterest, google maps, youtube, facebook, accuweather, and millions more.
- Some apis are paid, many are free.
- Today we use the giphy api

### JSON
- JSON: JavaScript Object Notation.
- JSON is a syntax for storing and exchanging data.
- Language agnostic, many different languages can work with JSON.
- Many APIs return data in the form of JSON.

### AJAX
- Asynchronous Javascript and XML
- ajax is the protocol through which our apps can interact with servers
- can be used to send and receive information.

### Code Example 1 - investigating a return from the giphy api
- Objective, use the giphy api to build a gallery of gifs
- Lets start by looking at a AJAX call to the giphy API and what is returned.
- In the broswer, open `giphy/one.html`
- Click the links, lets talk about what we see.

### Code Example 2 - using jquery to make the call to the api
```
// alert('working')
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
```
-Stop here, discuss 
- Q1: what is response? 
- Q2: what is inside response?
- Q3: How would I use js to get the url for a fixed height gif from the first element of the array? 


- A1: its an object, whats in the object
- A2: an array of objects
- A3: `var url = response.data[0].images.fixed_height.url`


### Code Example 3 - doing something cool, build the gallery
```javascript
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
	var wrapper = $('.wrapper');

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
```
- Q4: right now this is only returns pizza gifs, while cool, what if I want to get different gifs, how would I do that?
- A4: change the 'pizza' in the search string to something else

### Code Example 4 - adding search
```javascript
	$(document).ready(function() {
		 //set an event listener to the go button


		 $('.go').click(function(){
			//grab the search term from the search text input 	
		 	var term = $('.search').val()
		 	//call the new search function with the term as a parameter
		 	search(term);

		 	//hide the search box
		 	$('.searchbox').hide();
		 });

	});

	//move the ajax call to its own function, called search
	//should accept a search term as a parameter
	var search = function(term){
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
```

### You Do
- Add a 'random' button that will show any random gif to the screen.
- Hint: the `render` function won't work anymore, check out the the giphy api docs to understand why.
- Write a new function called `renderRandom` that will put a single full size gif in the wrapper.

## If This Then That
- show what the IFTTT maker channel can do.
- model with creeating a applet to add a song to the spotify playlist
- show how you used the spotify api to do a search for the songs, then use that to add songs to the playlist
- explain why this is a hacky solution, no server, no authorization, but it works nicely

## Introduce Final Project

### HW
- Read about [Node.js](http://eloquentjavascript.net/20_node.html)
- Read about [Express](http://code.tutsplus.com/tutorials/introduction-to-express--net-33367)
