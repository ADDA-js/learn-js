console.log("game.js is working");

function Game() {
	this.guesses;
	this.guessedLetters = [];
	this.answer = "";
	this.currentWord = ""; //becomes a word object!

	/*
should accept an argument, an array of strings
should set guesses to ten
Should select a random word from the array to use.
should set currentWord to an instance of word object you already wrote
should reset the guessedLetters array
should reset the words array
should fill the words array with the words from
	*/

	this.startGame = function(wordsArray){
		this.guesses = 10;

		var randomNumber = Math.floor(Math.random() * wordsArray.length)
		//console.log(randomNumber);
		var randWord = wordsArray[randomNumber];
		//console.log(randWord);
		this.currentWord = new Word();
		this.currentWord.getLetters(randWord);
		this.answer = randWord;

		this.guessedLetters = [];
	}

	this.guess = function(guess){
		if(this.guessedLetters.indexOf(guess) == -1){
			if(this.currentWord.try(guess) == false){
				this.guesses--;
				this.guessedLetters.push(guess);
			}	
		}
	}

	this.isOver = function(){
		if(this.currentWord.isFound() || this.guesses == 0){
			return true;
		}
		return false;
	}

	this.overMessage = function(){
		if(this.currentWord.isFound()){
			return "YOU WIN!"
		} else if(this.guesses == 0){
			return "YOU LOOSE!"
		} else return ''
	}

	this.render = function(){
		return this.currentWord.render(); 
	}
}
