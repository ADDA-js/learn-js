console.log('working yo')

// USE THIS TO SHUFFLE YOUR LETTERS 
// Code by Jonas Raoni Soares Silva @ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o) { //v1.0
  for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

var memoryGame = {
  tiles: ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J"],
  start: function() {
    //write code here
  },
  makeAndDisplayTiles: function() {
    //write code here
  },
  addEventsToTiles: function() {
    //write code here
  },
  makePlay: function() {
    //write code here
  },
  checkForMatch: function() {
    //write code here
  },
  checkForWin: function() {
    //write code here
  }
}


//add windo onload function
//start the game on a click of the start button
