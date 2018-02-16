console.log('yo js works');

//put your code here

// create a variable called userscore to keep track of your, set to 0 
// create a variable called computerscore to keep track of the computers score, set to 0 
var userscore = 0;
var computerscore = 0;

// create a variable called computerPlay to store the computers play 
// will be set by a function you write later
var computerPlay;

// create a variable called userPlay to store the users choice
// will be set by a function already written in update.js based on which radio button is clicked
var userPlay;

// write a function called setComputerPlay that creates the computer play, it should take no paramaters
function setComputerPlay() {
  // create a random number betwee 0 and 3
  var decimal = Math.random() * 3;
  var random = Math.floor(decimal);

  // if the number is 0, set computerPlay to rock
  // if the number is 1, set computerPlay to paper
  // if the number is 2, set computerPlay to scissors
  // else, there is a bug
  if (random == 0) {
    computerPlay = "rock";
  } else if (random == 1) {
    computerPlay = "paper";
  } else if (random == 2) {
    computerPlay = "scissors";
  } else {
    console.log('error');
  }
  //test your function in the console
}

//checkGame
// make a funciton called checkGame, this is being called by update.js
// compare the userPlay to the computerPlay to see who wins, use if statements
// alert the result, update the proper score
function checkGame() {
  if (computerPlay == userPlay) {
    alert('its a tie!') //i check this first because if its a tie, why bother with anything else?
  } else if (computerPlay == 'rock') { //you could checking using userPlay no difference 
    // nesting the if/else statments inside another if/else, just cuts down on some duplicate code, could have also used && in my comparisons
    if (userPlay == 'paper') {
      alert('paper beats rock! User Wins');
      userscore++
    } else if (userPlay == 'scissors') {
      alert('Rock beats scissors! Computer wins!');
      computerscore++
    }
  } else if (computerPlay == 'paper') {
    if (userPlay == 'rock') {
      alert('Paper beats rock! Computer wins!');
      computerscore++
    } else if (userPlay == 'scissors') {
      alert('Scissors beats paper! User wins!');
      userscore++
    }
  } else if (computerPlay == 'scissors') {
    if (userPlay == 'paper') {
      alert('Scissors beats paper! Computer wins!');
      computerscore++
    } else if (userPlay == 'rock') {
      alert('Rock beats scissros! User wins!');
      userscore++
    }
  }
}
