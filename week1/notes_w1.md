# Week 1 Instructor Notes

## Objectives
- I can explain when and why javascript is used.
- I can use the terminal to navigate, create files and folders.
- I can use javascript to store and compare data from a user.

## Do Now
- Open Slack (Browser or App!)
- In our class channel "js_driggers" slack your response to this question. What do you hope to accomplish in this class? 

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

## MiniLesson 1 - Using Terminal
Get Terminal fired up!
### Git and Github
1. type `git --version`, if github isn't installed it will prompt you to install. Do it!
2. Go to https://github.com/awdriggs-js/Spring_2016
3. Find the "Fork" button. Click it!
4. Copy the HTTPS clone url.
5. Back in Terminal, go to the director where you want all your work to live, type `git clone` then paste the clone url.

### Bash it!
We are going to be using the terminal a lot. At first it might seem cumbersome, but there is a purpose. First, it is way faster to navigate, create folders, and create files in the terminal. Second, we are going to be using terminal to commit our work to github. Lastly, being able to use the terminal is really helpful when you start deploying apps to a server. It's better to start now.

#### Navigation
`cd folderName`
- let's you change directories (that's what it stands for)
- it's like you're clicking into that folder

`cd ..`
- let's you go to the previous directory

Try it, navigate into week0, the type `cat README.md` Hint: tab key will autocomplete, keep hitting type until you get what you want.


#### Creating a folder
Navigate back out to the repo folder. `cd ..`.
Use `mkdir` followed by your name, no spaces. this creates a folder for you to do all the work.

This is where you should do your work. *DO NOT* work in work in the other folders in the repo. There is a strong chance it will be overwritten when you pull down my updates.

#### Creating Files

#### Cheatsheet of Common Commands
`pwd`
-print working directory, shows you where you are now

`open .`
-opens the current folder in finder

`ls`
- lists the files in a folder

`cd folderName`
- let's you change directories (that's what it stands for)
- it's like you`re clicking into that folder

`cd ..`
- let's you go to the previous directory

`touch filename`
- make a file where you are in the terminal

`rm filename`
- will delete a file permanently - won't be included in your trash

`mkdir foldername`
- make a folder where you are in the terminal

`rm -rf foldername`
- will delete a folder permanently - won't be included in your trash

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
- undefined is a variable that's available in javascript on default (easy explaination)
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

## Lets Push!
1. Save all your work.
2. Go back to terminal, navigate to the root of this repo.
3. Type 'git add .', this adds all the changes you made today.
4. Type 'git commit -m "adding work from w1 class"'
5. Type 'git push'
6. Check out your github page, all work you did in class should now be online.

## Homework
[A Simple Calculator](https://classroom.github.com/assignment-invitations/903e33134291838a197b7406163870d5), accept the invitation. 
- In terminal, do 'git clone <yourHWRepo>'
- Do your work in this repo.
- Use the psuedo code to get started if you are stuck.
- Commit and push often, push your final project by Tuesday night.

