# Week 7 - JS

## Objectives
- I can understand when and how to use jQuery.
- I can use an external api to retrieve data.

## Do Now

## Mini-Lesson - jQuery
- jQuery is a Javascript library
- Goal is to make DOM traversal, manipulation, and event handling easier.

### Targeting
```javascript
var parent = document.getElementById("about").parentNode;

var parent = $("#about").parent();

```

### Creating
```javascript
var newDiv = document.createElement("div");
document.body.appendChild(document.createElement("p"));

var newDiv = $("<div>");
$("body").append($("<p>"));
```

Click Events
```javascript
var links = document.getElementsByTagName("a")
links.addEventListener('click', function(){
	// code
})

$("a").click(function() {
  // code
})
```
- jQuery isn't magic, its written in javascript. Anything that you do with jQuery can be done in plain js. But jQuery makes hard things simple.

### when and how
When you might need jQuery
- For small projects where perfomance is not a big issue
- Simple projects with a tight deadline
- When you use a front-end library that has jQuery as a depedency.

When you might not need jQuery
- Acquiring an intermediate - advanced understanding of JS
- Working on complex web applications
- Building you own library or framework
-Server side applications with Node.js

### Traversal and Manipulation
```javascript
//Get the title change it 'Daily To Do List'
	$('h1').html('Daily To Do List');	

	//Add 'Get up' to the begining of the ul
	$('ul').prepend('<li>Get Up</li>');

	//Add 'Dream' to the end of the ul
	$('ul').append('<li>Dream</li>');

	// var happy = $('<h2>').text('all done').css('text-align', 'center') //create element and do stuff
	// $('.wrapper').append(happy);

	//how about in one line?
	// $('.wrapper').append($('<h2>').text('all done').css('text-align', 'center'));

	//Give 'Teach Class' a class name of current.
	$('li:contains("Teach Class")').addClass('current')

```

### You Do (5 minutes)
- Open `playlist.html`
- Use jquery to change your name in the title
- Use Jquery to add three songs to the ul with a class of `playlist`
- Add the class 'now-playing' to the first song you added

### Iteration
-Add this to ddprevious code
```javascript
//Iteration
	$('li').each(function(){
		$(this).css('text-decoration', 'line-through');
	})

	//implicit iteration
	//$('li').css('text-decoration', 'line-through');
```
-explain explicit iteration

### You Do (5 minutes)
- Return the the playlist exercise.
- Use iteration to make the songs you added previously have a class of 'played'.
- User iteration to add 5 more songs.

### Events
- Add a listener to the li item, cross out when clicked
```javascript
$('li').click(function(){
		$(this).css('text-decoration', 'line-through');
	});
```
- Uncomment the input area
- Add a listener to the button
```javascript
var addItem = function(){
	//set up listeners
	$('.add').click(function(){
		var todo = $('.newItem').val();
		var item = $('<li>').text(todo)
		$('ul').append(item)
	})	
}
```
-call `addItem()` in the ready function

### You Do (5 minutes)
- Return to the playlist exercise.
- Add a click event to the ul, when a song title is click, change the class name of that item to 'now-playing'. (challenge) only one song can be playing at a time 
- Create a text input and a button. When the button is clicked, add songs to the playlist.
- Create a new song, try to click it to get it to 'play', what happens?

### Delegated Click Events
- Show a delegated lick event
```javascript
	//better
	$('ul').on('click', 'li', function(element){
		$(element.target).css('text-decoration', 'line-through');
	});
```

### You Do (5 minutes)
- Change the click event to a delegated click

## Mini-Lesson 2: APIs and JSON
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

### HW
- [Lord of the Bling](https://classroom.github.com/assignment-invitations/f121308f1af11f36bf64c87c8f0219f2)
- [Immitation Movie Database](https://classroom.github.com/assignment-invitations/e3e21f0b37f42d68cd37c3ca1c15ab96)
- Read about [Node.js](http://eloquentjavascript.net/20_node.html)
- Read about [Express](http://code.tutsplus.com/tutorials/introduction-to-express--net-33367)
