# Tic Tac Toe Psuedo Code
## game.js
A js file for all the game logic

`winningCombinations`, an array, each item in the array is also an array that represents a winning move.
+ ex: `winningCombinations[0]` could be  `['0-0','0-1','0-2']`

`Cell`, an object constructor, accept two parameters, a row and a col, 
this represents the index 
+ `this.index`, a string with the index in this format "1-1"
+ 'this.value`, the cell value, " " to start, will become x or o later.

Write a game object
*properties*
`turn`, keep track of the turn, x or o.

`over`, boolean, set as false to begin.
	
`winner`, a var to hold the winning player, should be null to start
	
`board`, an empty array
	
*Methods*
`buildBoard, a function that uses a nested for loop to make a nested array to match a tictactoe board.
+ each item in the nested array should be a new Cell object.
	
`changeTurn`, no parameters 
 + change the turn to the other player. 
 + return the new value of turn.

`checkWin`, no parameters
 + write a for loop to go through 'winningCombinations',
 + make a variable to store the number of x's
 + make a variable to store the number of o's
 + write a for loop that goes through the current array at [i] of `winningCombinations`
  - get the current value of board at this location
  - if it is an x, increment 'x', if it is an 'o', increment o
 + after the inner loop, if either count for x or o is equal to 3, then a winning combo was found
  - set `over` to true
  - set 'winner' to whomever won
 + otherwise, `over` should remain false
 + return `over`
	
`updateCell`, take a row and a col as parameter
 + set the `cell.value` at that row and col to the current turn 
 + return the new cell value 

`reset`, a function to reset the game
 + clear the game board
 + rebuild the board
 + reset the winner
 + reset this.over to false;

## app.js
A js file for writing all the view updates and running the game


`renderturn`, a function to display the turn of the player in the turn div

`renderWin`, a function to display the game.winner in the turn div

`play`, a function that runs through game play, gets a html 'cell' element as
a paramater.
+ get the id of the parameter element, this is the cell index
+ store the row and the col of the id in seperate vars
+ call the `game.updateCell` function with the row and col
+ turn off the click for this cell, can't be clicked again!
+ check to see if the game is over
+ if the game is over, call `renderWin`
+ if the game is not over...
 - change `game.turn` and update the turn on the screen.

`setClicks`, a function that adds a click event to each `.cell`
should call the play function with this clicked element as the parameter.

`reset`, a function to reset the game
+ call `game.reset()`
+ render the turn
+ reset the clicks
+ reset all of the cells to be blank

`$(document).ready`, fires whe the dom is ready...
+ use `game.buildBoard` to make the board
+ call `setClicks` to render all the clicks
+ add a click listener to the reset button, should call the reset function

