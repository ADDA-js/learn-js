# Week 3

![strings](https://i.imgflip.com/14rgst.gif)

## Objective
- I can use string an array functions and properties to manipulate data.
- I can build functions with for loops to iterate over an array.

### max
- Write a function called `max` that takes an array of numbers as a parameter. The function should return the largest number that is in the array.
- Use the code below to test your function.
```javascript
  var numbers = [16, 25, 4, 13, 57, 88, 102, 45]

  console.log(max(numbers)) //should print 102
```

### Random Return
- Write a function call `randomSong` to get a random item from an array
- take in an array as a parameter
- return a single item
- hint: remember  `Math.random()`?

### Number of Instances
-Write a function called `numTimes` that takes a string and a single character. The function should return the number of times that the character is in the array.
- Use the code below to test?
```javascript
  var testString = 'Ob-La-Di, Ob-La-Da'

  console.log(numIn(testString, 'a')) //should print out 3
  console.log(numIn(testString, '-')) //should print out 4 
```

### Change Case
- Write a JavaScript function called `changeCase` which accept a string as input and will swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
- Hint: There are some string functions that will help you out. `toLowerCase()` will return the lower case version of that string. To do the opposite do `toUpperCase()`.
- Use the code below to test your function.
```javascript
  var testText = 'The Quick Brown Fox'

  console.log(changeCase(testText)); //should print 'tHE qUICK bROWN fOX'
```

### No Repeat
- Write a JavaScript function called `cleanUp` to remove duplicate items from an array (ignore case sensitivity)
- use the code below to test your function.
```javascript
  var testArray = ['a', 'b', 'a', 'c', 'c', 'b', 'd', 'd', 'a', 'c', 'd']

  console.log(cleanUp(testArray)); //should print ['a', 'b', 'c', 'd']
```

### Euler 6
- Ready for a challenge? Try to solve [this](https://projecteuler.net/problem=6)
