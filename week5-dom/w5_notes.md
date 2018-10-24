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

## DOM Manipulation
### Traversal and Manipulation
```javascript
var title = document.getElementById('title').innerHTML;
console.log(title);

// var list = document.getElementsByClassName(names);
var list = document.getElementsByTagName("ul");

//create a new element
var listItem = document.createElement('li');
//set content of that element
listItem.innerHTML = "Plan Vacation";
//append the element
list[0].appendChild(listItem);

listItem.innerHTML = "something else";
list[0].insertBefore(listItem, list[0].childNodes[0]);


var happy = document.createElement('h2')
happy.innerHTML = "All Done"
happy.style.color = 'blue';
document.getElementsByClassName('wrapper')[0].appendChild(happy)

//loop through list itmes
//if the item is "teach class"
//add class of current

for (var i = 0; i < list[0].children.length; i++) {
  var current = list[0].children[i];

  var cond = current.innerText == "Teach Class";

  if(cond){
    console.log('yes');
    current.classList.add('current');
  } else console.log('no');
}
```

### You Do (5 minutes)
- Open `playlist.html`
- Use jquery to change your name in the title
- Use Jquery to add three songs to the ul with a class of `playlist`
- Add the class 'now-playing' to the first song you added

### Iteration
-Add this to previous code
```javascript
for(var item of list[0].children) {
  item.classList.add('done');
}
```

### You Do (5 minutes)
- Return the playlist exercise.
- Use for of to make the songs you added previously have a class of 'played'.
- Use a for loop to add 5 more songs, make the title generic i.e. "new song 1".

### Events
- Add a listener to the li item, cross out when clicked
```javascript
for(var item of document.getElementsByClassName('todoItem')){
  item.addEventListener("click", test);
}
//test function onside onload, show debugger for what this is...
test = function() {
  this.classList.add('done')
}
```

- show how to add a new item
- Add a listener to the button
```
    var add = document.getElementById('add')
    add.addEventListener('click', addItem);
```
- write the function to add a new item, use debugger a lot
```javascript
function addItem() {
  debugger;
  var input = document.getElementById('newItem').value;

  //create a new li
  var newItem = document.createElement('li');
  newItem.innerHTML = input;
  newItem.classList.add('todoItem');
  document.getElementsByTagName('ul')[0].appendChild(newItem);
}
```

### You Do (5 minutes)
- Return to the playlist exercise.
- Add a click event to the ul, when a song title is click, change the class name of that item to 'now-playing'. (challenge) only one song can be playing at a time
- Create a text input and a button. When the button is clicked, add songs to the playlist.
- Create a new song, try to click it to get it to 'play', what happens?

### Delegated Click Events
- Show a delegated click event

```javascript
//better
  document.getElementsByTagName("ul")[0].addEventListener("click", function(e) {
    e.target.classList.add('done')
  });

```

## Practice 
- meme generator
