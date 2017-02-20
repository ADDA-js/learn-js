# Week 4

## Do Now
- Write a function that takes two strings, a letter to search, and a string to search through. Return the number of times that the letter appears in the string.

```javascript
   //test code

   var test1 = isFound('o', 'food');
   console.log(test1); //prints 2

  var test2 = isFound('i', 'happy');
  consoel.log(test2); //prints 0
```

- solution
```javascript
var isFound = function(letter, word) {
  var count = 0;
    
  for(var i = 0; i < word.length; i++){
    if(word.charAt(i) == letter){
      count++;
    }
  }
  return count;
}
```

## Mini-Lesson 1 - Objects 

### Objectives
- I can define objects, retrieve object properties, and call their functions.
- I can build object constructors to define object types.

### Objects Part 1
- Objects allow us to group values—including other objects—together and thus build more complex structures.
- Objects are made of up key value pairs
- We can access the data of an object by using the key.
- Anatomy,
  
```javascript
  var person = {
    name: 'adam',
    job: 'teacher'
  }

  console.log(person.name);
  //prints adam
```
- Objects can also have functions that are given to them.

```javascript
var myCar = {
make: 'Honda',
      model: 'Accord',
      year: '1984',
      color: 'white',
      'miles driven': 0,

      drive: function (distance) {
        this['miles driven'] += distance;
      }
}
```

### You Do, Movie objects
- Make a movie object, fill with info from your favorite movie
- Have the following data
1. title, the title of the show
2. director, the person who directed the movie
3. year, the year that the movie was made
3. stars, a list of the actors in the movie
4. genre, a list of the categories this movie fits into, i.e. drama, mystery, comedy
5. watched, the number of times that you have seen this movie
5. watch, a function that increases the watched property by one, alerts to the broswer that you are watching a movie.
- Test out your object in the console, make sure that it is working as expected.
- Bonus, create a function that loops through the characters, printing a message 'i.e. Keaunu Reeves Rocks! Patrick Swayze Rocks'

## Mini-Lesson 1.2, Objects Part 2
- Both examples have just created just one object
- Object become more powerful when we create object types, then we can use this over and over again.
- Lets create a Car object type that we can use to create new cars

``` javascript
var Car = function (make, model, year, color, miles) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.miles = miles
};

//create a new car
var firstCar = new Car('Oldsmobile', 'Cutlass', 1991, 'white', 28000)
```
- We could just add functions inside the constructor, but the proper way to do this is to use a prototype function.

``` javascript
//anatomy
class_name.prototype.method_name = function(first_argument) {
  // body of function...
};

//example
Car.prototype.drive = function(distance){
  this.miles += distance;
};
```

###Your Turn
- Create a movie class constructor.
- Prototype a function called watch, this increments the number of times the movie has been watched.
- Prototype a function called printOut, this prints a string with the movie details. ie. "Point Break came out in 1991. The movie stars Patrick Swayze and Keanu Reeves. I rated it 4.5 stars and have watch it 6 times."

## Mini-Lesson 2

### Objectives
- I can add, update, and delete object from the page using my knowledge of the DOM.
- I can implement event listeners to watch for user interaction.

### Introduction to DOM
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

### Introduction to jQuery
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
- Return the playlist exercise.
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
