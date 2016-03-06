# Week 4

## Objectives
- I can define objects, retrieve object properties, and call their functions.
- I can build object constructors to define object types.
- I can add, update, and delete object from the page using my knowledge of the DOM.
- I can implement event listeners to watch for user interaction.

## Do Now
- Create an Array of common greetings in different languages, i.e. "Hola" "Guten Tag" "Ni hao"
- Create a function called greeting, that when given a name, responds with a randomly choosen greeting from the list. If a greeting chosen, remove it from the list.
- Create a function called addMessage, it takes a string and adds it to the list of greetings.
- Prompt the user for a name, use the greeting function to greet them to your app
- Prompt the user for a custom greeting, use addMessage to add it to our list.
- Make sure it all works within the console.

## Housekeeping


## Mini-Lesson 1, Objects Part 1
-  Objects allow us to group values—including other objects—together and thus build more complex structures.
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

Objects can also have functions that are given to them.

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

## Mini-Lesson 2, Objects Part 2
- Both examples have just created just one object
- Object become more powerful when we create object types, then we can use this over and over again.
- Lets create a Car object type that we can use to create new cars

```javascript
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

```javascript
//anatomy
class_name.prototype.method_name = function(first_argument) {
	// body...
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

## Mini-Lesson 3, Da, Da, Dom
- DOM, document *object* model
- When a web page is loaded, the browser creates a document object model of the page.
- This is simply a tree of objects, representing everything on the page.
- Javascript can manipulate any part of the DOM, adding and removing at will.
- Javascript can also add classes, ids and CSS attributes.

We must get an element before we can do anything to it. Many ways to accomplish this.
-document.getElementById(id) --> Find an element by element id
-document.getElementsByTagName(name) --> Find elements by tag name, returns array
-document.getElementsByClassName(name) --> Find elements by class name, returns array

```javascript
//show through console
var list = document.getElementsByTagName('ul')[0]; //get the first element with the tag ul
var firstItem = list.firstElementChild; //gets the first child of the element
firstItem.style.color = "blue"; //change the styling of the first list item
firstItem.className = 'current' //apply class
firstItme.style.color = 'blue' //will override and set to true, should show as an inline color
```

```javascript
//live code and run
var wednesday = function(list){
	//A
	var ul = document.createElement('ul');
	ul.className = "wednesday";

	var title = document.createElement('h2');
	title.innerHTML = "My wednesday to do:";
	ul.appendChild(title);
	document.body.appendChild(ul);



	for(var i = 0; i < list.length; i++){
		var item = document.createElement('li'); //create the element
		item.innerHTML = list[i]; //set the elemnt attributes and classes
		ul.appendChild(item); //append to parent
	}
}

wednesday(todolist); //this will build a list.
```

### You Do
+ Open domEx.html
+ make an array of five or your favorite bands
+ create a div
+ add the classname of "wrapper"
+ create a ul
+ Make a for loop that creates list items of your favorite bands, append each band to the ul
+ After the four loop append the ul to wrapper
+ Append the wrapper to the body
+ InConsole, remove a band from the ul
+ BONUS, create a function called isFavorite, it takes a string that represents your favorite band. The functions should go through the all the li, if the band name inside the li matches your favorite, add the class of "favorite" to the item. Write some css rule to test.
+ BONUS, create a text input and a button. Add an event listener to the button, if the button is pressed, get the value from the text box. See if the valu is in your list.

## Mini-Lesson 4, Event Loop

