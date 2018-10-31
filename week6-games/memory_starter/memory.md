# Memory!

Today we are going to build the game memory.

We're going to create a game object in which we define all of the logic for how our game should work. Then we will add click events to make the game functional.

# function bank, 
These are js functions that might come in handy, ;) 
- `.innerHTML`
- `.classList.add`
- `.classList.remove`
- `.attributes`
- `.setAttribute`
- `.append`
- `.removeEventListener`

# memoryGame object

#### Attributes

- tiles
	- an array of 'tiles' representing the letter values that will be displayed on each DOM tile.

#### Object Methods 
- `start: function()`
	- call the shuffle function with this games tiles.
  - call the `makeAndDisplayTiles` function.
- `makeAndDisplayTiles: function()`
	- target the div with an id of "game", empty it
	- target the footer, reset the footer's text
	- use a for loop to create 10 new div tags to be the cards 
    - add a class of 'card' to each tile
		- add an attribute to the tile 
			- make an attribute to the card named 'data-value', set equal to the current letter of the shuffled game tiles
  - call the `addEventsToTiles` function.
- `addEventsToTiles: function()`
  - target all the cards you just created in the game board.
  - for each card, add a click event
	- The click event should call this game object's makePlay function
- `makePlay: function()`
  - tip: use the console to see what 'this' is.  
	- this function should set the text of the current card to the value stored in the 'data-value' attribute
	- it should add a class of clicked to the tile
	- if the number of cards with a class of clicked is 2, then it should check for a match (hint: `document.getElementsByClassName` is array like, it has a length value)
  - note: 'this' has changed! so we need to call `memoryGame.checkForMatch()` to run the next function 
- `checkForMatch: function()`
	- this should retrieve the data-value attribute of the two clicked tiles, hint: `document.getElementsByClassName` is array like, see what is is the first and second index
	- if the two data values are a match…
		- the click event should be turned off for those tiles
		- the 'clicked' class should be removed from the tiles
		- add a class of 'found' to these tiles 
		- should check for a win by calling the checkForWin function
	- if no match is found
		- the text of the clicked cards should be set back to empty
		- the found and clicked classes should both be removed
    - hmmm, the card text disapears so fast that you can't even see the second card, checkout the js function `setTimeout`, maybe it will help
- `checkForWin: function()`
	- if the number of found tiles is 20 (meaning all the cards have a class of found now)
		- add a winning message to the footer

## START
- create a document ready function
- add a click event to the button, so that when it is clicked `memoryGame.start` triggered.

## BONUS
- add a property to the game that keeps score, when the game is over tell the user how many clicks they used to solve.
