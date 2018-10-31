console.log('game working');
// game.js, a js file for all the game logic

// `winningCombinations`, an array, each item in the array is also an array that represents a winning move.
//	ex: `winningCombinations[0]` could be  `['0-0','0-1','0-2']`
var winningCombinations = [
    ['0-0','0-1','0-2'],
    ['1-0','1-1','1-2'],
    ['2-0','2-1','2-2'],
    ['0-0','1-0','2-0'],
    ['0-1','1-1','2-1'],
    ['0-2','1-2','2-2'],
    ['0-0','1-1','2-2'],
    ['0-2','1-1','2-0']
  ];

// `Cell`, an object constructor, accept two parameters, a row and a col, 
// this represents the index 
// + `this.index`, a string with the index in this format "1-1"
var Cell = function(row, col){
	//`this.index`, assign to the index parameter passed to the function
	this.index = row + '-' + col;
	//'this.value`, the cell value, " " to start, will become x or o later
  this.value = " ";
}

// Write a game object
// properties
var game = {
// `turn`, keep track of the turn, x or o.
	turn: 'x',
// `over`, boolean, set as false to begin.
	over: false,
// `winner`, a var to hold the winning player, should be null to start
	winner: null,
// `board`, an empty array
	board: [],

// Methods to write...
// `buildBoard, a function that uses a nested for loop to make a nested array to match a tictactoe board.
//  each item should be a new Cell object.
	buildBoard: function(){
		for(var i = 0; i < 3; i++){
			this.board.push([]);
			for(var j = 0; j < 3; j++){
				var cell = new Cell(i, j);
				this.board[i].push(cell)
			}
		}
	},
// `changeTurn`, no parameters 
//  + change the turn to the other player. 
//  + return the new value of turn.
	changeTurn: function(){
		if(this.turn == 'x'){
			this.turn = 'o';
		} else this.turn = 'x';
		return this.turn;
	},

// `checkWin`, no parameters
//  + write a for loop to go through 'winningCombinations',
//  + make a variable to store the number of x's
//  + make a variable to store the number of o's
//  + write a for loop that goes through the current array at [i] of `winningCombinations`
//   - get the current value of board at this location
//   - if it is an x, increment 'x', if it is an 'o', increment o
//  + after the inner loop, if either count for x or o is equal to 3, then a winning combo was found
//   - set `over` to true
//   - set 'winner' to whomever won
//  + otherwise, `over` should remain false
//  + return `over`
	checkWin: function(){
		for(var i = 0; i < winningCombinations.length; i++){
			var xScore = 0;
			var oScore = 0;
			
			for(var j = 0; j < winningCombinations[i].length; j++){
				var row = winningCombinations[i][j].split('-')[0];
				var col = winningCombinations[i][j].split('-')[1];
				
				if(this.board[row][col].value == 'x'){
					xScore++;
				} else if(this.board[row][col].value == 'o'){
					oScore++;
				}
			}

			if(xScore == 3){
				this.over = true;
				this.winner = 'x';
				return this.over;
			} else if(oScore == 3){
				this.over = true;
				this.winner = 'o';
				return this.over;
			}
		}

		return this.over; //will be false here, this means no one has won.
	},

// `updateCell`, take a row and a col as parameter
//  + set the `cell.value` at that row and col to the current turn 
//  + check to see if the game has been won by calling `checkWin()`
//  + return the new cell value 
	updateCell: function(row, col){
		
		var current = this.board[row][col];
		current.value = this.turn;

		return current.value;
	},

  //`reset`, a function to reset the game
  // + clear the game board
  // + rebuild the board
  // + reset the winner
  // + reset this.over to false;
  reset: function(){
    this.board = [];
    this.buildBoard();
    this.changeTurn();
    this.winner = null;
    this.over = false;

    return "game reset";
  }
}

