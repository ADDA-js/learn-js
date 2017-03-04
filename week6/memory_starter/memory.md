
# Memory!

Today we are going to build the game memory.

We're going to create a game object in which we define all of the logic for how our game should work. Then we will add click events to make the game functional.

# memoryGame object

#### Attributes

- tiles
	- an array of 'tiles' representing the letter values that will be displayed on each DOM tile.

#### Behaviors

- `start()`
	- shuffle the gameboard's tiles
	- then call a function to build and display the gameboard
- `makeAndDisplayTiles()`
	- this function should empty the container that will hold the gameboard tiles
	- it should reset the footer's text
	- it should create 10 new game tiles
		- add a data-attribute
			- 'data-value' set equal to the one of the shuffled game tiles
	- then call a function that will add click events to each tile
- `addEventsToTiles()`
	- should add click events to each of the gameboard tiles
	- The click event should call the game object's makePlay function passing it the tile that was clicked
- `makePlay(tile)`
	- this function should set the text of the current clicked tile to the value stored in the data attribute
	- it should add a class of found to the tile
	- it should add a class of clicked to the tile
	- if the number of clicked tiles is 2, then it should check for a match
- `checkForMatch()`
	- this should retrieve the data-value of the two clicked tiles
	- if they are a match
		- the 'clicked' class should be removed from the tiles
		- the click event should be turned off for those tiles
		- should check for a win
	- if no match is found
		- the text of the clicked cards should be set back to empty
		- the found and clicked classes should both be removed
- `checkForWin()`
	- if the number of found tiles is 10
		- add a winning message to the footer
		- remove the found class
		- add a won class

## START

- add a click event to the button, so that when it is clicked a new game is triggered.