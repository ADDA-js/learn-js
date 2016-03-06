## Objectives
- I can implement event listeners to watch for user interaction.
- I can use gh-pages to setup hosting for my project
- I can write user stories and pseudo code to guide my work flow.

## Do Now
-Create a simple metrocard object constructor. Should have keys for date purchased, and amount
-Create a function called swipe, check to see if there is enough cash, if yes remove 2.75, if return false
-Create a function called get balance that returns the card balance balance.
-BONUS, implement an unlimited monthly ride card type. You will need to update swipe to work with different card types. Pro tip, js has a Date constructor built in.

## Agenda
- Do Now, if/else with and/or, maybe?
- DOM Review
- Introduction to user stories and psuedo code
- Break
- HTML/CSS refresher for those who want it.
- Others work on Psuedo code
- I will conference with all students before class is over.

## DOM Exercise
- Review slides from last week
- rview cycle, create then appendChild

### You Do
+ Open domEx.html
+ in HTML create a div, add the classname of "wrapper"
+ in JS, make an array of five or your favorite bands
+ use `document.createElement` to create a ul
+ Make a for loop that creates list items of your favorite bands, append each band to the ul
+ After the for loop append the ul to wrapper
+ Append the wrapper to the body
+ In the Inspect Console, remove a band from the ul, is it still in the playlist?
+ BONUS, when a band name is clicked, add some CSS to signify it as your favorite, you can only have one favorite.
+ BONUS 2, add a text input and button, when the button is clicked, add it to the list

```javascript
var wrapper = document.getElementsByClassName('wrapper')[0];

var playlist = ['War on Drugs', 'Mac Demarco', 'Bob Dylan', 'Daft Punk', 'Grimes']

var ul = document.createElement('ul');

for(var i = 0; i < playlist.length; i++){
	
	console.log('w')
	var item = document.createElement('li');
	item.innerHTML = playlist[i];
	ul.appendChild(item);
}

wrapper.appendChild(ul);

//Bonus 1
ul.addEventListener('click', function(element){
	var all = ul.children;
	for(var i = 0; i < all.length; i++){
		all[i].className = '';
	}

	element.target.className = 'favorite';
})
```

## User Stories and Psuedo Code
Introduce userstories with mind sweeper, use trello. Remember [Mine Sweeper?](http://windows.microsoft.com/en-us/windows/minesweeper-how-to#1TC=windows-7)

I'm going to develop a simple version of this game, 9 boxes, one mine. Possible User Stories. Use Trello.
- I want to see an 3 by 3 grid, filled with grey boxes, one of the boxes hides a mine.
- I want to be able to click a box to see if it is a mine
- If it is a mine, i want the game to end.
- If it is not a mine, I want to see my score go up.
- If I score 8 points without clicking a mine, I win!
- If the game is over, I want to option to play again.

Next is Psuedo Code
- This could be a diagram, a wireframe, some code like text, whatever is going to help get you from user story to js
```javascript
//function, create grid'
//make a nested for loop to create 3x3 grid.
//i is the rows, j is the columns.
//inside j, create a div element with the class of 'box blue'
```
- I would repeat this for most, if not all, my userstories before I started writing any code.

## HTML CSS Review For those who wanted it.
- HTML Topics, Tags, Divs, ids, classnames, buttons, text input, images
- CSS topics, display, width/height, margin, background-color, background-img, border radius, font
- Special topics? flexbox, float
- Questions?

## Setting Up Hosting with Github Pages
- Its good to get hosting setup. Makes deploying easier at the end.
- Create a new repo, initialize with a readme
- create a branch called 'gh-pages'
- Go to settings, make 'gh-pages' the primary branch.
- You html page must be called index.html
- Add your index.html and js files to the 
- Go to `http://username.github.io/reponame/` should work
