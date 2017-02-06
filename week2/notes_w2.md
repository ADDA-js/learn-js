# Week 2 Instructor Notes

## Objectives
- I can control program flow using while loops
- I can create custom functions.

## Do Now
There are some errors in the script below. Find them!

```javascript
var cash = 15;

var numCandyBars = prompt('How many candy bars to you want to buy?')

var cost = numCandyBar * 0.75;

alert = cash - cost;

if(cash = 0){
  alert('you're out of money!')
}
```

## Stand-up
- Successes?
- Struggles?
- Show and Tell.

## Mini-Lesson 1, more comparisons
- [or operator](http://codepen.io/awdriggs/pen/LxrZJR)
- [not operator](http://codepen.io/awdriggs/pen/bgKezm)
- [multiple if/else](http://codepen.io/awdriggs/pen/VPdKZM)
- [and operator + random number generator](http://codepen.io/awdriggs/pen/qRKNNE)

- or operator, change pen to this

```javascript
var response = prompt('Do you like movies');

//check to see if they said 'yes'
if(response == "Yes" || response == "yes"){
  alert('I like movies too');
} else {
  alert('too bad :| movies are good')
}
```

- not operator, change pen to this

```javascript
var userInput = prompt("give me a 5");

//before
if(userInput == "5"){
  alert('Thanks!');
} else {
  alert('You left me hanging!')
}

//after
if(userInput != "5"){
  alert("You left me hanging!");
} else {
  alert("Thanks!");
}

```

- if/else in a series, change pen to this

```javascript
var choice = prompt('Choose door A, B, or C');
//make sure they did upper case
choice = choice.toUpperCase();
console.log(choice);

//after
//if there are more than two choices, run the if else pattern through multiple times.
if(choice == "A"){
  alert("Let's see what's behind door A!");
} else if(choice == "B"){
  alert("Let's see what's behind door B!");
} else if(choice == "C"){
  alert('Let\'s see what\'s behind door C!');
} else {
  alert('Stop messing around and choose a door already!')
}
```

- and operator, change pen to this

```javascript
var userInput = prompt("I'm thinking of a number between between between 1 and 10");
var number = parseInt(userInput);

//Math lets me do math stuff
//Math.floor chops off the decimal
//Math.rand gives me a random number between 0 and 1
//by multiplying by 10 I scale the random number to what I want it to be
var randomNumber = Math.floor(Math.random() * 10);


if (number >= 0 && number <= 10) {
  alert("my number was " + randomNumber + ". You're response was " + (number - randomNumber) + " away!");
} else {
  alert("You didn't input a number");
}
```

## EX 1, favorite sandwich
- BLT checker
- Confirm that the sandwich has bacon
- Confirm that the sandwich has lettuce
- Confirm that the sandwich has tomato
- If all three things are true, alert user that is is a blt
[starter code](http://codepen.io/awdriggs/pen/ggKwoZ?editors=0011)

## Mini-Lesson 2, while loops
While loops will continue to happen as long a condition is true.

```
var userName = prompt("What's your name?");

var payingAttention = true;

while(payingAttention){

  document.write("On " + Date() + " " + userName + " was paying attention <br>");
  payingAttention = confirm('Are you paying attention '+ userName +'?');
  console.log(payingAttention);
}
document.write(userName + " can you look at your phone - and stop paying attention - " + "At " + Date() + " " + userName + " is now not paying attention!");

```

EX2
You have just invested in ADDA, a sweet digital design agency.
The stock price starts at 10 dollars.
While the stock price is greater than or equal to 10, confirm the new stock price. If the stock price falls below 10 dollars, alert the user that they should sell! Stop asking what the price is.

```javascript
var stockPrice = 10; //assume dollars

while (stockPrice >= 10){

  stockPrice = confirm("What's ADDA's stock price now?"); //won't work - why? Spend 2 minutes discussing this with your partner

  if (stockPrice < 10){
    alert('Sell!!!');
  }
  //Answer:
  //wrap prompt in parseInt

  //on a side note: isNaN(""); //checks if a value is a number or not - why not isNumber?... JavaScript
  ```

## Mini-lesson 3, writing functions
    -Use calculator app
    -add functions to solution code.

## EX 3
    1. Function 1
    - Write a function min that takes two arguments and returns the small value.
    2. Function 2
    - Write a function that takes in a test number.
    - If the number can be divided by 3 with no remainder, print "fizz"
    - If the number can be divided by 5 with no remainder, print"buzz"
    - If the number is divisible by both 5 and 3, print "fizzbuzz"
    3. Function 3: callback me maybe (Challenge!)
    - create a function called telephone that returns "867-5309" when called.
    - Write a separate function called Blondie that takes a function as a parameter.
    - Blondie should alert "call me on the line at " when called, and then execute any function passed to it.


### Solutions
```javascript

    function findMin(num1, num2){
      if(num1 <= num2){
        return num1;
      } else if(num2 < num1){
        return num2;
      } else {
        return 'error';
      }
    }
```
```javascript
    function fizzer(testNum){

      if((testNum%3 == 0) && (testNum%5 == 0)){
        return ("FizzBuzz");
      } else if(i%3 == 0) {
        return ('Fizz');
      } else if(i%5 == 0){
        return ('Buzz');
      } else {
        return testNum;
      }
    }
  ```
```
    var telephone = function() {
      return "867-5309";
    }

  var blondie = function(func) {
    var number = func();
    console.log("call me on the line at "+ number);
  }

  blondie(telephone);
```

## Homework
    [Rock Paper Scissors](https://classroom.github.com/assignment-invitations/497a0a18d496324b317b9895472b9c62), accept the invitation.
    - In terminal, do 'git clone <yourHWRepo>'
      - Do your work in this repo.
      - Use the psuedo code to get started if you are stuck.
      - Commit and push often, push your final project by Tuesday night.



