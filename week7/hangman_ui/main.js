console.log("main.js working");

var testWords = ["acres", "adult", "advice", "arrangement", "attempt", "August", "autumn", "border", "breeze", "brick", 
			 "calm", "canal", "casey", "cast", "chose", "claws", "coach", "constantly", "contrast", "cookies", "customs", 
			 "damage", "danny", "deeply", "depth", "discussion", "doll", "donkey", 
			 "egypt", "ellen", "essential", "exchange", "exist", "explanation", 
			 "facing", "film", "finest", "fireplace", "floating", "folks", "fort", 
			 "garage", "grabbed", "grandmother", "habit", "happily", "Harry", "heading", "hunter", 
			 "illinois", "image", "independent", "instant", "january", "kids", "label", "lee", "lungs", 
			 "manufacturing", "martin", "mathematics", "melted", "memory", "mill", "mission", "monkey", "mount", "mysterious", 
			 "neighborhood", "norway", "nuts", "occasionally", "official", "ourselves", 
			 "palace", "pennsylvania", "philadelphia", "plates", "poetry", "policeman", "positive", "possibly", "practical", "pride", "promised", 
			 "recall", "relationship", "remarkable", "require", "rhyme", "rocky", "rubbed", "rush", 
			 "sale", "satellites", "satisfied", "scared", "selection", "shake", "shaking", "shallow", "shout", "silly", "simplest", "slight", "slip", "slope", "soap", "solar", "species", "spin", "stiff", "swung", 
			 "tales", "thumb", "tobacco", "toy", "trap", "treated", "tune", 
			 "university", "vapor", "vessels", "wealth", "wolf", "zoo"];

// Follow the directions! even if they don't make sense at first!
// Test frequently using the console
// you need to do a little work in the html doc too! start there!

// Make game var

// write a function called guess
  // grab the value of the text input
// use the value to with the game.guess() method
// check to see if the game is over using the game.isOver method
// if the game is over run the gameOver function 
// if the game is not over, run the update function
//

// Write a function called play		
// clear the game board
// create a paragraph for the render
// create a paragraph for the guesses
// create a paragraph for the used words
// append all to the gameboard
// assign the game variable to be a new Game object
// call the method startGame with the testWords array as a parameter
// call the update function
//

// write a function called update
// in this funnction...
  // target the render paragraph, make its test the result of game.render()
  // target the gusses paragraph, make its text be game.guesses
  // target the used paragraph, make iss text be game.guessedLetter

// write a function called gameOver
  // clear the gameboard
  // make a paragraph with the text of the returned from game.overMessage()

// document ready function
// add a click even to start the game when the start button is pressed
// when clicked, call the play function
  
//add a click event to check a guess
// when clicked, call the guess function
