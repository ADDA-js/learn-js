# Week 1 Instructor Notes
## Objectives
- I can explain when and why javascript is used.
- I can use the terminal to navigate, create files and folders.
- I can use javascript to store and compare data from a user.

## Do Now
- Open Slack (Browser or App!)
  - In our class channel slack your response to this question. What do you hope to accomplish in this class?

## Introductions/Housekeeping

### Syllabus
  - expectations
  - long term goals
  - contacting me
  - contacting each other

### Circle up! 2 whip arounds.
  1. Name, Class, Major, Hometown, a movie you've seen 5+ times.
  2. Why JS? Why Now?

### Diving In
#### Ask what is JS?
  - Javascript is not Java.
  - Javascript is a programming language.
  - Javascript is dynamic, change change at runtime.
  - Javascript is untyped.

#### Ask where is JS?
Javascript is nearly a universal language. It runs all sorts of devices and systems. Javascipt is in the browswer (client) and the server (node)

#### Ask why JS?
  - JS is the standard for all web interactions.
  - JS is can be used as a full stack, meaning we can write js for both the client and the server. This is awesome!

## MiniLesson 1 - Javascript Data, Comparisons, Conditionals

### Variables and Datatypes
  - Numbers, you know, 2, -5, 0.5, 54789
  - Strings, Text! Always in quotes, single or double
  - Boolean, True or False
  - Arrays, Basically, a list. One direction exercises
  - JS, null, undefined, NaN

#### Model, 15 minutes
  - go over taking in user input
  - variables contain data (like my name is 'Adam')
  - variables can be initialized, then set
  - if the variable is initialized, it's value is undefined, this is not good practice.
  - you can do variable == undefined and it would be true
  - undefined is a variable that's available in javascript on default (easy explanation)
  - undefined is a variable that's available in global scope on default
  - variables can be initialized and set in one go
  - go over the different datatypes being used
  - go over conditional logic
  - go over writing to the page

  Example 1
  ```
  // store a variable
  var name = 'adam';
  var age = 32;
  var coder = true;

  // send info to the console
  // for debugging
  console.log(name);
  // add html to the browser
  document.write(name);


  var username = prompt('what is your name?');

  document.write('hello ' + username)

  var question = confirm('Do you code?');

  // do this to show the output of the confirm
  document.write(question);
  console.log(question);

  //show slides for if statement
  //add this
  if(question) {
    alert(username + " codes"
        } else {
        alert(username + " doesn't code yet"

            // example 2 bouncer
            alert('can I see your id?');
            var ageText = prompt('What is your age?')
            //output the content, prompt people to see if there is anything strange?

            //parseInt changes text to a number.
            var age = parseInt(ageText);
            console.log(age);

            if(age >= 21){
            alert('Come on in!');
            } else {
            alert('Go away!')
            }
 ```

#### EX1 - 20 minutes
 - use prompt to store the person's name
 - confirm that are 18 or older, if they are not 18, alert them that they can't vote.
 - if so, ask them if they are registered to vote.
 - if they are register alert a message "Make sure to vote on November 6"
 - if they are NOT registered to alert a message "You have until October 12 to register"
 - Bonus: if they are not registered to vote send them to the website to register. 

## EX2 - 5 minutes
 Comparisons compare two things, give you an answer as a boolean value. Let's dig into some examples
 - share pen https://codepen.io/awdriggs/pen/ZLvQbr
```javascript
// discover exercise regarding strings, numbers and booleans, conditional logic
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
}*/

/*if ("4" == 4){
  alert('barnard')
}else{
  alert('columbia')
}*/

/*if ("4" === 4){
  alert('barnard')
}else{
  alert('columbia')
}*/

/*if (true){
  alert('Beyonce')
}else{
  alert('Solange')
}*/

/*if (false){
  alert('apple')
}else{
  alert('orange')
}*/

/*if ((5 + "5") == "55"){
  alert('tofu')
}else{
  alert('soybean')
}*/

/*if ("2" < "12"){
  alert('coffee')
}else{
  alert('tea')
}*/
```

### EX 3
- Send out pen for calculator app

done!
 
