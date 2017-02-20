### Warm-Up
- Read about the jquery .val and .attr methods
- Google them!

### Events part two
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

## Nested Loops
- Say you wanted to make a grid of 100 boxes in html, that would be a lot of copy and pasting
- We can use our sweet javascript skills to do this procedurally.

```javascript
$(document).ready(function(){
  
  for(var i = 0; i < rows; i++){
    var row = $('<div>').addClass('row');
    for(var j = 0; j < columns; j++){
     var box =  $('<div>').addClass('box');
      row.append(box);
    }

    $('.wrapper').append(row);
  }
});
```
-add some more classes to the boxes 
```javascript
  var box =  $('<div>').addClass('box row-' + i + ' col-' + j);
```
- Add a click event to the box
```javascript
  $('.box').click(function(){
    //this will be the box that is clicked
    console.log(this);
    $(this).addClass('clicked');
  });  
```

### You Do
this exercise has two objectives
1) get you comfortable with the jquery docs
2) get you to build something fun

before you get started, read up on the jquery .attr and .val methods 

don't overthink this, probably don't need a nested loop here!

Write a function called make
- grab the value from the input box
- make a loop that goes from 1 to the number that was in the input
- inside the loop
    + use jquery to great an image
    + assign the image an src attribute to an image
    + hint: the images are in a folder called subway
    + hint 2: the images are named by a number, for example the first image will have the file path 'subway/1.gif'
    + append the image to the wrapper

is the document ready?
- add a click function to the make button

Bonus!
- hmm, it just keeps adding images to the button when I run it again
- how can you clear the wrapper?

Bonus 2
- When you click an image, make it disappear
- hint: the images won't exist when the dom is created

solution
```javascript
$(document).ready(function(){
  $('.go').click(make);
})

var make = function(){
  var num = parseInt($('.input').val());
  
  for(var i = 1; i <= num; i++){
    var image = $('<img>').attr('src', 'subway/' + i + '.gif');
    $('.wrapper').append(image);
  }
}
```

## Hangman UI
Time permitting or for hw?
- have students work on hangman ui files
- all directions are in the main.js

## Introduce Projects
Your goal is to create a simple game.

I would suggest three different options
1. Tic Tac Toe
2. Memory
3. Connect Four

### User Stories
Start by writing user stories. These are the actions that you want to user to be able to make. This might sound simple and unnecessary, but will help you keep focus.

Example: As a user, I want to be able to click a button to reset the game.

I use trello to keep track of my user stories.

### Psuedo Code
Spend a good amount of time on psuedo code, this will help you think aboutthe logic of game without worrying about the code just yet.

Think about the directions I write for you guys in the exercises, thats the level of pseudo code you should be shooting for.


