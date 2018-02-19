# Week 3 Objectives

## Resources
http://eloquentjavascript.net/03_functions.html

## Objectives
- I can build functions with for loops to iterate over an array.
- I can use string an array functions and properties to manipulate data.

##Do Now
```javascript
// functions for greeting people in different languages
function english(name) {
  return "hello " + name;
}

function spanish(name) {
  return "hola " + name;
}

function german(name) {
  return "guten tag " + name;
}

// This is another function, what is it doing?
function greeting(name, language) {
  return language(name);
}

var name = "adam"

// alert the result of using greeting 
var test1 = greeting(name, english); // will be set to "hello adam"
var test2 = greeting(name, spanish); // will be set to what?
var test3 = greeting(name, german); // will be set to what?

// Greeting is taking two parameters.
// what is the first parameter? What type of data is it?
// what is the second parameter? What type of data is it?

// What is happening here?
```

## Function review
```javascript
function scoped(){
   var inside = true; //assigned inside a function
   }

   scoped();
   console.log(inside); // ReferenceError: inside is not defined
```
- If a variable is assigned inside a function, then it can only be used inside a function
- This is called scope. The variable is scoped to the function.

```javascript
var name = "adam"

function hello(user){
  name = 'not adam'; // can affect a variable outside of the function
  console.log(user); //will print "adam", because user is declared as adam
}

hello(name);
console.log(name); // will print "not adam"
```
- When you are inside a function, you can access variables from outside a function
- This can be dangerous, calling a function could have a adverse side effect.
- Better to use return to assign the result of a function.

```
var where = 'outside';

function bad(){
  where = 'inside'; // this will reset the 'where' variable
}

bad();
console.log(where); // prints inside
```
- same idea here, function has a side effect
- if it can't find it there, then it goes outside to see if there is a variable there

```javascript
var where = 'outisde'
 
function good(){
  var where = 'inside'; //creates a new and different variable called where
  console.log(where); //prints inside
}
 
good();
console.log(where); // prints outside
```
- here, there will be two variables with the name 'where'
- this is fine! when the function is called, it first looks inside the function for the variable
- won't change the where outside the function

```javascript
var num = 4;

function badGlobal(input) {
  result = input + 1; 
    return result;
    }

badGlobal(num);
console.log(result); // what? where was result defined?
```
- the variable result was never defined!
- the js engine thinks "hmm, i see a reference to a variable, but no variable with that name has been defined. I'll be nice and define it for them."
- so no `Reference Error`, but now there is a global variable floating about, not great practice

### Rock Paper Scissors (< 15 min)
- Pair programming exercise

## Mini-Lesson 2, for loops
### I Do, 10 minutes or less
- For loops are used to execute a block of code repeatedly, as long as a condition remains true
```javascript
  for(var i = 0; i < 10; i++){
    console.log("i is " + i);
  }
```
- We can think of i as the index of the loop.
- We can put more complex code inside the for loop

```javascript
for(var i = 0; i < 10; i++){
  if(i % 2 == 0){
    console.log(i + ' is even');
  } else{
    console.log(i + ' is odd');
  }
}
```
- show how you can call a function from inside a for loop.
```javascript
function isEven(num) {
  if(num % 2 == 0){
    return  num + ' is even');
  } else{
    return num + ' is odd');
  }
}
for(var i = 0; i < 10; i++){
  isEven(i);
}
```

## Mini-Lesson 2, string and arrays, properties and methods
### strings
- strings have built in properties and methods
- `string.length` gives the length property of the string.

```javascript
var tester = prompt("Type something!");

alert("your string is " + tester.length + " characters long")
```

- show `string.charAt()`
- show `string.toLowerCase()`
- show `string.toUpperCase()`
- show `string.indexOf()`

### arrays
- introduce arrays
- Arrays are a list
- We use an index to reference where something is in an array.
- First index is 0, not 1
- Each list item can hold any type of data; strings, numbers, functions, even other arrays!
- Arrays also have properties and methods.

#### 10 minutes I do (arrays)
```javascript
var animals = ['parrot', 'cat', 'dog'];

animals.length();

animals[1];

animals[2];

animals[animals.length()];

animals[animals.length()-1];

animals.indexOf('bear');

animals.indexOf('parrot');

//
//check if something exists in an array or not
if (animals.indexOf('bear') == -1) {
  alert('not in the list man');
}else{
  alert('in the list man')
}

//choose random option from an array
var randomComputerOption = animals[Math.floor(Math.random() * animals.length)];

animals.push('bear') //pushes to the end

animals.unshift('rabbit') //pushes to beginning // returns the new array length

animals.pop() //removes the last element of the array //also returns that element as a value

animals[0] = 'lion'; //replaces a value in an array
```

- show `string.split()`, this creates an array.

```javacript
  var word = 'barnard';

  var wordsLetters = word.split(); //doesn't work as expected why?

  var wordsLetters = word.split(''); //creates an array of the string

  var letterIndex = wordsLetters.indexOf('a')

  wordsLetters.splice(letterIndex, 1); //gets rid of that letter in the array

  wordsLetters;

```
- explain what arrays are to your partner

#### Strings/Array Practice, 5 minutes you do
- make an array of 5 of your favorite bands/musicians and put them inside of the array as individual items 
- ask the user (using prompt) for a band/artist, turn the user input lower case and then tell the user if you like the band too
- hint: check to see if it is also in your array.

*Ended here S18, moved the rest to w4*
#### 2, 10 minutes we do
```javascript
var breakfast = ['granola', 'yougurt', 'coffee'];
var lunch = ['sandwich', 'chips'];
var dinner = ['pasta', 'tomato sauce', 'garlic bread'];
 
// Array manipulation 
// Without changing the code above:
  // - Change coffee to tea in breakfast
  // - Add 'hummus' to lunch
  // - Carbs on Carbs, remove 'garlic bread' from dinner

// Nested Arrays  
// Create a new array called 'meals', store breakfast, lunch and dinner in meals.

// How would you...
  // - Access the the the 2nd item from lunch?
  // - Change 'granola' to 'oatmeal'
  // - Add 'ice cream' to dinner?

// now console out the starting meals
console.log(breakfast, lunch, dinner);
// what do you notice?

// if we would rather store a copy of breakfest, lunch and dinner, we can use slice()

var mealsCopy = [breakfast.slice(), lunch.slice(), dinner.slice()];

mealsCopy[0][2] = 'iced coffee';

console.log(breakfast[2]);
console.log(mealsCopy[0][2]);
```

### Strings and Arrays Practice 2
 - Write a function `lengths` that accepts an array as a single parameter.
 - The function should return an array of numbers where each number is the length of the corresponding string.

```javascript
 //starter

 var albums = ['Meet the Beatles', 'Beatles on Sale', 'Hard Days Night', 'Seargent Peppers Lonely Heart Club Band', 'White Album']

 //write a function called length, that prints on the length of each string inside the array

 //BONUS, change the function to return an array of just the album title lengths

```

## Final Practice 
- Open `4-Practice`
- Write the 5 functions 






