# Week 7 - JS

## Objectives
- I can use an external api to retrieve data.

## Do Now
- use a button to append an image, in the code folder

## js review, building a grid
```
//make a rows variable and a columns variable
console.log('working');
//once the dom is ready...
window.onload = function() {
  //make variables to hold number of rows and columns
  var numRows = 10;
  var numCols = 10;
  //make a for loop to build the rows
  for (var i = 0; i < numRows; i++) {
    var row = document.createElement('div');
    row.classList.add('row');

    for (var j = 0; j < numCols; j++) {
      var box = document.createElement('div');
      box.classList.add('box');
      box.id = i + '-' + j;
      row.appendChild(box);
    }

    document.querySelector('.wrapper').appendChild(row);
  }

  //create a row div, add class row;

  //make a for loop for the columns
  //create the box div, add class box
  //append the box to the row
  //append the row to the wrapper

  //use iteration to a click function to each of the boxes
  //since boxes aren't being added dynamically, no need for a delegated event listener
  //click event to each box
  var boxes = document.getElementsByClassName('box');

  for (var box of boxes) {
    console.log(box);
    box.addEventListener('click', function() {
      alert(this.id);
    });
  }
}
```

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
window.onload = function() {
  //using axios ajax get to request data from aan api
  var link = 'http://api.giphy.com/v1/gifs/search?q=pizza&api_key=dc6zaTOxFJmzC';

  axios.get(link)
    .then(function(response) {
      // handle success
      debugger;
    })
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
window.onload = function() {

  var url = 'http://api.giphy.com/v1/gifs/search?q=pizza&api_key=dc6zaTOxFJmzC';
  
  axios.get(url).then(render);
}

var render = function(response) {
  //build the elements to the dom
  //Grab the wrapper div
  var wrapper = document.querySelector('.wrapper'); 
   
  //with a for loop
  var data = response.data.data;   
  //for every object in the response data array
  //  -create a new image tag 
  //	-grab the fixed-height url //go to one.html look at the json
  // 	-set the img src to the url
  //	-append the img to the wrapper
  for(var item of data){
    var image = document.createElement('img');
    image.setAttribute('src', item.images.fixed_height.url);
    wrapper.appendChild(image);
  }
}
```
- Q4: right now this is only returns pizza gifs, while cool, what if I want to get different gifs, how would I do that?
- A4: change the 'pizza' in the search string to something else

### Code Example 4 - adding search
```javascript
// add a click to the go button
// call the search function with whatever value is in the searchbox
window.onload = function() {
  var button = document.querySelector('.go');

  button.addEventListener('click', function(){
    var searchTerm = document.querySelector('.search').value;
    search(searchTerm); 
  }); 
   
}

//move the ajax call to its own function, called search
//should accept a search term as a parameter
	
	//grab the search term from the search text input 
	 
  //call the new search function with the term as a parameter
	 //hide the search box

var search = function(term){
  var url = 'http://api.giphy.com/v1/gifs/search?q='+term+'&api_key=dc6zaTOxFJmzC';
  axios.get(url).then(render);
}

//same as three...
var render = function(response){
  var data = response.data.data;

	//clear the wrapper
  var wrapper = document.querySelector('.wrapper')
  wrapper.innerHTML = "";
	//for every object in the response data array
		//  -create a new image tag 
		//	-grab the fixed-height url
		// 	-set the img src to the url
		//	-append the img to the wrapper
  for(var item of data){
    var image = document.createElement('img');
    image.setAttribute('src', item.images.fixed_height.url);
    wrapper.appendChild(image);
  }
}
```

### You Do
- Add a 'random' button that will show any random gif to the screen.
- Hint: the `render` function won't work anymore, check out the the giphy api docs to understand why.
- Write a new function called `renderRandom` that will put a single full size gif in the wrapper.

## Homework
- OMDB assignment 
