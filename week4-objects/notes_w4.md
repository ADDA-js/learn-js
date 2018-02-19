# Week 4

## Do Now
- In starter code, go to `1-strings-arrays-review`
- open `bands.html` and `bands.js`
- Follow comments
  + make an array of 5 of your favorite bands/musicians and put them inside of the array as individual items 
  + ask the user (using prompt) for a band/artist, turn the user input lower case and then tell the user if you like the band too
  + hint: check to see if it is also in your array.

## 0 - Psuedocode Example
- show slide with notes
- show slide with fizzbuzz example
- have students pseudocode out the solution for a function to see how many times a char shows in a string
- have students turn pseudocode into real code.

## 1 - Arrays Part 2, 10 minutes we do
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

### Array + Strings Practice 
- Open `4-Practice`
- Write the 5 functions 
 
## 2 - Objects 

### Objectives
- I can define objects, retrieve object properties, and call their functions.
- I can build object constructors to define object types.

### Objects Part 1
- Objects allow us to group values—including other objects—together and thus build more complex structures.
- Objects are made of up key value pairs
- We can access the data of an object by using the key.
- Anatomy,
  
```javascript
  var person = {
    name: 'adam',
    job: 'teacher'
  }

  console.log(person.name);
  //prints adam
```
- Objects can also have functions that are given to them.

```javascript
var myCar = {
make: 'Honda',
      model: 'Accord',
      year: '1984',
      color: 'white',
      'miles driven': 0,

      drive: function (distance) {
        this['miles driven'] += distance;
      }
}
```

### You Do, Movie objects
- Make a movie object, fill with info from your favorite movie
- Have the following data
1. title, the title of the show
2. director, the person who directed the movie
3. year, the year that the movie was made
3. stars, a list of the actors in the movie
4. genre, a list of the categories this movie fits into, i.e. drama, mystery, comedy
5. watched, the number of times that you have seen this movie
5. watch, a function that increases the watched property by one, alerts to the broswer that you are watching a movie.
- Test out your object in the console, make sure that it is working as expected.
- Bonus, create a function that loops through the characters, printing a message 'i.e. Keaunu Reeves Rocks! Patrick Swayze Rocks'

## Mini-Lesson 1.2, Objects Part 2
- Both examples have just created just one object
- Object become more powerful when we create object types, then we can use this over and over again.
- Lets create a Car object type that we can use to create new cars

``` javascript
var Car = function (make, model, year, color, miles) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.miles = miles
};

//create a new car
var firstCar = new Car('Oldsmobile', 'Cutlass', 1991, 'white', 28000)
```
- We could just add functions inside the constructor, but the proper way to do this is to use a prototype function.

``` javascript
//anatomy
class_name.prototype.method_name = function(first_argument) {
  // body of function...
};

//example
Car.prototype.drive = function(distance){
  this.miles += distance;
};
```

### Your Turn
- Create a movie class constructor.
- Prototype a function called watch, this increments the number of times the movie has been watched.
- Prototype a function called printOut, this prints a string with the movie details. ie. "Point Break came out in 1991. The movie stars Patrick Swayze and Keanu Reeves. I rated it 4.5 stars and have watch it 6 times."


## Practice - Time permitting
- Build Console Hangman
 
## Resources
-[instance vs. prototype](https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/)
-[Stack Overflow: Why use prototype?](https://stackoverflow.com/questions/4508313/advantages-of-using-prototype-vs-defining-methods-straight-in-the-constructor);
