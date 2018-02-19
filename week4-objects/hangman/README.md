# Console Hangman

You will be creating the popular game of Hangman as a JavaScript console game! Follow the psuedo code below.

## letter.js 
Letter is a function that returns a Letter object.  

### Letter Properties and Functions
- `value`, a string
- `hidden`, a boolean
- `hide()`, a function that will set `hidden` to true
- `show()`, a function that will set `hidden` to false
- `render()`, a function that will return ` _ ` if the letter is hidden. Return the value if the letter is not hidden

## word.js
Word is a function that returns a word object.

### Word Properties and Functions
- `letters`, an array of Letter objects
- `getLetters(newWord)`, accepts an input argument, newWord
  + shwould create `letter` objects for every letter in newWord
- `isFound()`, returns true if no letters are still hidden, returns false if at least one letter is hidden
- `try(letter)`, accepts an input argument, a string goes through letters and reveals the ones whose value mathes the input argument `letter`returns a boolean indicating if the letter was found
- `render()`, returns the word in its "guessed state." ex: for the word 'closure', if the letters l, s, and e have been guessed, this function should return the string `"_ l _ s _ _ e"`

## game.js
Game is a function that returns a game object.

### Properties and Functions 
- `guesses`, a number of guesses that the user has before the game is over, i.e. 10
- `guessedLetters`, an array of strings
- `words`, an array of strings
- `currentWord`, starts as an empty string
- `startGame(wordsArray)`
  + should accept an argument, an array of strings
  + should set `guesses` to ten
  + Should select a random word from the array to use.
  + should set `currentWord` to an instance of `word` object you already wrote
  + should reset the `guessedLetters` array
  + should reset the `words` array
  + should fill the `words` array with the words from
- `wordArray`
  + should select a random word from `words` and create `currentWord`
  + should `getLetters` for the `currentWord`
- `guess(letter)`, Ask the word instance to `try(letter)` if `letter` hasn't been tried already
- `isOver()`, returns true if `currentWord` has been guessed completely or if `guesses` is 0
- `overMessage()`
  + Returns "You win" if `currentWord` is found
  + Returns "You lose" if `guesses` is 0
  + Returns an empty string if game is not over
- `render()`, displays rendered word, and number of guesses left, and the guessed letters so far


## main.js
Main.js the file that will run the entire game.
- There is an array of words to be used as a bank of words for the game
- start a new game using this array of words
* accept user input (using `prompt()`) and make moves in a looping manner, until the game is over
* When the game is over, the game over message should be displayed and the
program should exit.

### Bonus
* After the game is over, give the user the option to either quit or start a new game, and implement the necessary code for this feature to work
