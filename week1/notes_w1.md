# Week 1 Instructor Notes
## Objectives
- I can explain when and why javascript is used.
- I can use the terminal to navigate, create files and folders.
- I can use javascript to store and compare data from a user.

## Do Now
- Open Slack (Browser or App!)
- In our class channel "f16-w-js" slack your response to this question. What do you hope to accomplish in this class? 

## Introductions/Housekeeping

### Syllabus
- expectations
- long term goals
- on github
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

## MiniLesson 1 - Using Github Desktop 
### Git and Github
  1. Go to https://github.com/ADDA-js/learn-js 
  2. Find the "Fork" button. Click it!
  4. Click "Clone or Download" then click "Open in Desktop." If you have Github desktop installed, this should work on load the repo onto your computer
  5. Back in Terminal, go to the director where you want all your work to live, type `git clone` then paste the clone url.

## MiniLesson 2 - Javascript Data, Comparisons, Conditionals

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

Example
```
	var userName = prompt("What's your name?");
	
	var confirm = confirm('Do you like cats?');

	var petName = 'Jelly Cat';
	var petType = 'Tabby cat';
	var petAge = 1;
	var petIsCat = true;

	if (confirm){
		alert(petName + petType + petAge)
	}else{
		alert("You don't get my cat's information")
	}

	if (petIsCat == true){
		alert('my pet is a cat')
	}else{
		alert('my pet is not a cat')
	}

	if (petAge !== 7){
		alert('My pet is not 7 years old')
	}

	if (petAge == 5){
		alert('My pet is 5 years old')
	}elseif(petAge < 5){
		alert('My pet is less than 5 years old')
	}elseif(petAge > 5){
		alert('My pet is older than 5 years old')
	}

	//this replaces the entire page with this - so it's not something you'll normally use - but it's what we'll use for now to be able to print stuff to the page
	document.write('Welcome to our page ' + userName);

	var catAge = prompt('how old is your cat?');

	alert(catAge + 2); //won't work as expected

	alert(parseInt(catAge) + 2); //works as expected
```

#### EX1 - 20 minutes
Write polling program. Ask for the user name, then ask for the voters age. If the user is 18 or older, ask them who they will vote for from a list of options. Write to the screen their name, their age, and the candidate they chose.

If they younger than 18, alert them they can't vote.

**Challenge**
Ask the user if they are registered to vote. If yes continue with the first part. If no, redirect the user to the website to register in New York.

## EX2 - 5 minutes
Comparisons compare two things, give you an answer as a boolean value. Let's dig into some examples
	
```
	// discover exercise regarding strings, numbers and booleans, conditional logic


	/*
	if (true == true){
		alert('hi')
	}else{
		alert('bye')
	}*/

	/*
	if (false == false){
		alert('dude')
	}else{
		alert('nope')
	}*/

	/*if ("4" == 4){
		alert('barnard')
	}else{
		alert('marford - I made this up')
	}*/

	/*if ("4" === 4){
		alert('barnard')
	}else{
		alert('marford - I made this up')
	}*/

	/*if (true){
		alert('goo goo dolls')
	}else{
		alert('vanilla ice')
	}*/

	/*if (false){
		alert('the neighborhood')
	}else{
		alert('one direction')
	}*/

	/*if (("5" + "5") == "55"){
		alert('tofu')
	}else{
		alert('soybean')
	}*/

	/*if ((6 + "5") == "65"){
		alert('richard')
	}else{
		alert('branson')
	}*/
```

## Homework Push!
  - show students how to push how to the homework repo.
  
## Homework
[starter code](https://github.com/ADDA-js/F_2016_JS_HW/tree/master/w1-myCalc)

