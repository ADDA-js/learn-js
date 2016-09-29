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

## EX1 - 5 minutes
Comparisons compare two things, give you an answer as a boolean value. Let's dig into some examples
	
```
/*
if (true == true){
	alert('hi')
}else{
	alert('bye')
}
*/

/*
if (false == false){
	alert('dude')
}else{
	alert('nope')
}
*/

/*
if ("4" == 4){
	alert('barnard')
}else{
	alert('columbia')
}
*/

/*
if("4" === 4){
  alert('barnard')
}else{
  alert('columbia');
*/

/*
if (true){
  alert('goo goo dolls')
}else{
  alert('vanilla ice')
}
*/

/*
if (("5" + "5") == "55"){
  alert('tofu')
}else{
  alert('soybean')
}
*/

/*
if ((6 + "5") == "65"){
  alert('richard')
}else{
  alert('branson')
}
*/
		
/*
if (!true == false){
  alert('goo goo dolls')
}else{
  alert('vanilla ice')
}
*/

/*
var something; 
if (something != undefined){
  alert('car')
}else{
  alert('van')
}
*/
```

## Mini-Lesson 2, while loops
While loops will continue to happen as long a condition is true.
```
var userName = prompt('What\'s your name?');

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

```
var stockPrice = 10; //assume dollars

while (stockPrice >= 10){

	stockPrice = confirm("What's ADDA's stock price now?"); //won't work - why? Spend 2 minutes discussing this with your partner

	if (stockPrice < 10){
		alert('Sell!!!');
	}
}

//Answer:
//wrap confirm in parseInt

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
	- If the number can be divided by 5 with no remainder, pring "buzz"
	- If the number is divisible by both 5 and 3, print "fizzbuzz" 
3. Function 3: callback me maybe (Challenge!)
	- create a function called telephone that returns "867-5309" when called. 
	- Write a seperate function called Blondie that takes a function as a parameter. 
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

2
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
3
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

## Lets Push!
1. Save all your work.
2. Go back to terminal, navigate to the root of this repo.
3. Type 'git add .', this adds all the changes you made today.
4. Type 'git commit -m "adding work from w2 class"'
5. Type 'git push'
6. Check out your github page, all work you did in class should now be online.

## Homework
[Rock Paper Scissors](https://classroom.github.com/assignment-invitations/497a0a18d496324b317b9895472b9c62), accept the invitation. 
- In terminal, do 'git clone <yourHWRepo>'
- Do your work in this repo.
- Use the psuedo code to get started if you are stuck.
- Commit and push often, push your final project by Tuesday night.



