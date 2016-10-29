# Week 5

##Objectives
- I can add, update, and delete object from the page using my knowledge of the DOM.
- I can implement event listeners to watch for user interaction.

## Do Now
- Create a simple metrocard object constructor. Should have keys for date purchased, and amount
- Create a function called swipe, check to see if there is enough cash, if yes remove 2.75, if return false
- Create a function called get balance that returns the card balance balance.
- BONUS, implement an unlimited monthly ride card type. You will need to update swipe to work with different card types. Pro tip, js has a Date constructor built in.

## Introduction to DOM
- DOM, document *object* model
- When a web page is loaded, the browser creates a document object model of the page.
- This is simply a tree of objects, representing everything on the page.
- Javascript can manipulate any part of the DOM, adding and removing at will.
- Javascript can also add classes, ids and CSS attributes.

### Some Jargon
- We traverse the DOM Tree
- We target DOM elements
- We manipulate those elements
- We listen for events
- We handle events when they happen
- DOM events are clicks, key presses, etc.

### Targeting
We must get an element before we can do anything to it. Many ways to accomplish this.
- element by element id
- Find elements by html tag name, returns array
- Find elements by class name, returns array

## Introduction to jQuery
- jQuery is a Javascript library
- Goal is to make DOM traversal, manipulation, and event handling easier.

### when and how
When you might need jQuery
- For small projects where perfomance is not a big issue
- Simple projects with a tight deadline
- When you use a front-end library that has jQuery as a depedency.

When you might not need jQuery
- Acquiring an advanced understanding of JS
- Working on complex web applications
- Building you own library or framework
-Server side applications with Node.js

### Traversal and Manipulation
```javascript
//Get the title change it 'Daily To Do List'
	$('h1').html('Daily To Do List');
	//This works, but add in another h1, run again
	//show by targeting a class
	$('#title').html('Daily To Do List')

	//Add 'Get up' to the begining of the ul
	var list = $('ul')

	list.prepend('<li>Get Up</li>');

	//all one one line?
	$('ul').prepend('<li>Snore</li>');

	//Add 'Dream' to the end of the ul
	$('ul').append('<li>Dream</li>');

	// Cycle 1) Create 2) Add to parent 
	var happy = $('<h1>').text('all done!').css('color', '#BADA55') 

	//create element and do stuff
	// $('.wrapper').append(happy);

	//how about in one line?
	// $('.wrapper').append($('<h1>').text('all done!').css('color', '#BADA55'));

	//Give 'Teach Class' a class name of current.
	$('li:contains("Teach Class")').addClass('current')
```

### You Do (5 minutes)
- Open `playlist.html`
- Use jquery to change your name in the title
- Use Jquery to add three songs to the ul with a class of `playlist`
- Add the class 'now-playing' to the first song you added

### Iteration
-Add this to previous code
```javascript
//Iteration, 
// .each is basically a for loop that goes over all the elements in the array of li items
	$('li').each(function(){
		$(this).addClass('done');
	})

	//implicit iteration, since li will be an array, this will automatically loop over everything int that array
	$('li').addClass('done');
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
//show how to target the input arrea in the console
$('.newItem').val();

//show how to set a click event
$('.add').click(); //add some function

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
