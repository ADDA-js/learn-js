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

## Housekeeping
- Make sure everyone has Sublime.
- Share all files as a zip. 
- Show how to unzip. have students put the folder somewhere safe, ie. docs, desktop, a folder named 'adda'
- Often students struggle to understand how to open code files. Be slow and explicit here. Show how to launch sublime to the browswer, i.e. right click, launch in browser.
- Show how to drag the whole folder to sublime so students have all files.
- Open up `donow` folder, have students give answer to the getting started task. Open in chrome to check code.

## More Logical Operators 
``` 
var a = true;
var b = true;
var c = false;

// and operator
if(a == true && b == true){
  console.log('both are true');
} else {
  console.log('both are not true');
}

// or operator
if(a || c){
  console.log('either are true');
} else {
  console.log('neither are true');
}

// not operator
if(!a){
  console.log('not true');
} else {
  console.log('is true');
}
 
// not operator
if(!c){
  console.log('not true');
} else {
  console.log('is true');
}
```

## logic practice, 
- show slide for the exercise
- have students follow the comments to write different conditionals.
```javascipt
//will be true if the box is checked, will be false if not
var hasBacon, hasLettuce, hasTomato, hasCheese, hasKale, hasPeanutButter, hasBanana;
//this function will be called when the button is clicked 
function checkSandwich() {
  updateItems(); //this will update the values, see input.js if you are interested to see how. 
  // Your Turn!!!
  //if all bacon lettuce and tomato are all true, alert the user that this is a blt
  //else, alert that user that this is not a blt 
  if (hasBacon && hasLettuce && hasTomato) {
    alert('true blt');
  } else {
    alert('false blt');
  }
  //if the sandwich doesn't have bacon, alert that it is vegetarian
  //else, alert that it is not vegetarian
  //use the ! (not operator)
  if (!hasBacon) {
    alert('is veggie');
  } else {
    alert('not veggie');
  }
  //if kale or avocado are true, alert the user that this sandwich has superfood
  //else, tell them that it does not have super foods 
  if (hasKale || hasAvocado) {
    alert('is super');
  } else {
    alert('not super');
  }
  //elvis worthy? 
  //if the sandwich peanutbutter and has bacon or banana,  alert that elvis would approve
  //else, alert that elvis wouldn't approve 
  if (hasPeanutButter && (hasBacon || hasBanana)) {
    alert('elvis approved');
  } else {
    alert('not elvis approved');
  }
}
```

## while loops
While loops will continue to happen as long a condition is true.

```javascript
var payingAttention = true;

while(payingAttention){
  payingAttention = confirm('are you paying attention?');

  document.write("On " + Date() + " you were paying attention <br>");
  //print a msg to the screen
  if(!payingAttention){
    document.write('you stopped paying attention at ' + Date());
  }
}
```

### While Loop Exercises
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
- super simple
- write a function that will just alert "hello" when called
```javascript
function sayhi(){
  alert("hello");
}
```

- write an function to see if two numbers are even.
```javascript
function isEven(number){
  if(number % 2 == 0){
    return "even";
  } else {
    return "odd";
  }
}
```

- write a function that returns a random number up to a max 
```javascript
function getRandom(max){
  return Math.floor(Math.random() * max);
}
```

## EX 3
Less Than 
- Write a function min that takes two arguments and returns the small value.

Fizz Buzz 
- Write a function that takes in a test number.
- If the number can be divided by 3 with no remainder, print "fizz"
- If the number can be divided by 5 with no remainder, print"buzz"
- If the number is divisible by both 5 and 3, print "fizzbuzz"
- HINT, check out the % operator
- Challenge, use while operator to check values 0 to 100
  - Make sure you have a check to stop the while loop 

TuTone (Challenge!)
- create a function called "jenny" that simply returns "867-5309" when called.
- Write another function called "tommy" that takes the jenny function as a parameter.
- store a message, "Jenny I've called your number " +  and then execute the telephone function passed to it.
- alert the message

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

```javascript
    var jenny = function() {
      return "867-5309";
    }

  var tommy = function(func) {
    console.log("call me on the line at "+ func());
  }

  tommy(jenny);
```

## Final Practice 
- Make a rock paper scissors game. Use the starter code int the `rock_paper_scissors` folder
- Use the psuedo code to get started if you are stuck.



