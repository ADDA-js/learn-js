## Objectives
- I can implement event listeners to watch for user interaction.
- I can use gh-pages to setup hosting for my project
- I can write user stories and psuedo code to guide my development flow.

## Do Now
-Create a simple metrocard object constructor. Should have keys for date purchased, and amount
-Create a function called swipe, check to see if there is enough cash, if yes remove 2.75, if return false
-Create a function called get balance that returns the card balance balance.
-BONUS, implement an unlimited monthly ride card type. You will need to update swipe to work with different card types. Pro tip, js has a Date constructor built in.

## Agenda
- Do Now, if/else with and/or, maybe?
- DOM Review
- Introduction to user stories and psuedo code
- Break
- HTML/CSS refresher for those who want it.
- Others work on Psuedo code
- I will conference with all students before class is over.

## DOM Exercise
We didn't get to this last week, good refresher.

### You Do
+ Open domEx.html
+ make an array of five or your favorite bands
+ create a div
+ add the classname of "wrapper"
+ create a ul
+ Make a for loop that creates list items of your favorite bands, append each band to the ul
+ After the four loop append the ul to wrapper
+ Append the wrapper to the body
+ InConsole, remove a band from the ul
+ BONUS, create a function called isFavorite, it takes a string that represents your favorite band. The functions should go through the all the li, if the band name inside the li matches your favorite, add the class of "favorite" to the item. Write some css rule to test.
+ BONUS, create a text input and a button. Add an event listener to the button, if the button is pressed, get the value from the text box. See if the valu is in your list.


Introduce userstories with mind sweeper, use trello
Remember [Mine Sweeper?](http://windows.microsoft.com/en-us/windows/minesweeper-how-to#1TC=windows-7)

I'm going to develop a simple version of this game, 9 boxes, one mine. Possible User Stories. Use Trello.
- I want to see an 3 by 3 grid, filled with grey boxes, one of the boxes hides a mine.
- I want to be able to click a box to see if it is a mine
- If it is a mine, i want the game to end.
- If it is not a mine, I want to see my score go up.
- If I score 8 points without clicking a mine, I win!
- If the game is over, I want to option to play again.