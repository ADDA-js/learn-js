# Week 6 - JS

## Objectives
- I can celebrate the success of building my first app.
- I can understand when and how to use jQuery.

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
- Use jquery to change the change your name in the title
- Use Jquery to add three songs to the ul with a class of `playlist`
- Add the class 'now-playing' to the first song you added

### Iteration
-Add this to previous code
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

## HW
- [LOTR](https://classroom.github.com/assignment-invitations/f121308f1af11f36bf64c87c8f0219f2)