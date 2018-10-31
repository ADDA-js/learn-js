console.log('app working')

// app.js, a js file for writing all the view updates and running the game

// `renderturn`, a function to display the turn of the player in the turn div
var renderTurn = function() {
    $('#turn').html('<h3>player turn: ' + game.turn + '</h3>');
  }
// `renderWin`, a function to display the game.winner in the turn div
var renderWin = function() {
    $('#turn').html('<h3>' + game.winner + ' wins!</h3>');
  }

// `play`, a function that runs through game play, gets a html 'cell' element as
// a paramater.
// + get the id of the parameter element, this is the cell index
// + store the row and the col of the id in seperate vars
// + call the `game.updateCell` function with the row and col
// + turn off the click for this cell, can't be clicked again!
// + check to see if the game is over
// + if the game is over, call `renderWin`
// + if the game is not over...
//  - change `game.turn` and update the turn on the screen.
var play = function(target) {
  var row = $(target).attr('id').split('-')[0];
  var col = $(target).attr('id').split('-')[1];
  
  game.updateCell(row, col);
  
  $(target).text(game.turn);
  
  $(target).off("click"); 
  
  game.checkWin();

  if (game.over) {
    renderWin();
  } else {
    game.changeTurn();
    renderTurn();
  }
}

// `setClicks`, a function that adds a click event to each `.cell`
// should call the play function with this clicked element as the parameter.
var setClicks = function(){
  $('.cell').click(function() {
    play(this)
  });
}

// `reset`, a function to reset the game
// + call `game.reset()`
// + render the turn
// + reset the clicks
// + reset all of the cells to be blank
var reset = function() {
  game.reset();
  renderTurn();
  setClicks();
  $('.cell').html('&#8203');
}


// `$(document).ready`, fires whe the dom is ready...
// + call `setClicks` to render all the clicks
// + add a click listener to the reset button, should call the reset function
$(document).ready(function() {
  setClicks();
  renderTurn();

  game.buildBoard();
  $('.reset').click(reset);
})
