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
    shuffle(this.tiles);
    this.makeAndDisplayTiles();
  },
  makeAndDisplayTiles: function() {
    var board = $('#game');
    board.empty();
    $('footer').text("");

    for (var i = 0; i < this.tiles.length; i++) {
      var card = $('<div>').addClass('card').attr('data-value', this.tiles[i]);
      board.append(card);
    }
    this.addEventsToTiles();
  },
  addEventsToTiles: function() {
    $('.card').click(this.makePlay);
  },
  makePlay: function() {
    console.log('click')
    var current = $(this); //make it a jquery thing
    current.text(current.attr('data-value'));
    current.addClass('clicked');
    var numFound = $('.clicked').length;

    if (numFound == 2) {
      memoryGame.checkForMatch();
    }
  },
  checkForMatch() {
    var cards = $('.clicked');

    var cardOne = $(cards[0]).attr('data-value');
    var cardTwo = $(cards[1]).attr('data-value');

    setTimeout(function() {
      if (cardOne == cardTwo) {
        console.log('match');
        cards.removeClass('clicked').addClass('found');
        cards.off('click');
        memoryGame.checkForWin(); 
      } else {
        cards.removeClass('clicked').empty();
      }
    }, 500)

  },
  checkForWin: function() {
    if($('.found').length == 20){
      console.log('game over');
    }
  }
}

$(document).ready(function() {
  $('button').click(function(){
    memoryGame.start();
  });
});
