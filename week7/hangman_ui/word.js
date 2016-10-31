console.log("word.js is working");

function Word() {
	this.letters = [];
	//takes in a string as a parameter, build the letters array
	this.getLetters = function(newWord){
		//this is a temporary array with strings for each letter
		var temp = newWord.split("");
		//console.log(temp);
		//this loops over the temp array and stores each value in this.letters
		for(var i = 0; i < temp.length; i++){
			this.letters.push(new Letter(temp[i]));
		}
		console.log(this.letters);
	}

	this.isFound = function(){
		for(var i = 0; i < this.letters.length; i++){
			//console.log(this.letters[i].value, this.letters[i].hidden);
		if(this.letters[i].hidden == true)
			return false;
		}
		
		return true;
	}

	this.try = function(tryLetter){
		
		var letterFound = false

		for(var i = 0; i < this.letters.length; i++){
			
			if(this.letters[i].value == tryLetter){
				this.letters[i].show();
				letterFound = true;
			}
		}
			return letterFound;
	}

	this.render = function(){
		var string = "";

		for(var i = 0; i < this.letters.length; i++){
			string = string + this.letters[i].render() + " ";
		}

		return string;
	}
}

//Testing code 
// var test = new Word();
// test.getLetters('house');









