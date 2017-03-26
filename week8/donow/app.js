$(document).ready(function() {
  //set an clikc listener to the ask button
  //when clicked, call the ask8ball function
});

//ask8bal function
  //- grab the search term from the search text input 
  //- clear the question in the search box
  //- use the jquery ajax function to ask the magic 8 ball the question
  //- this is the url for the magic 8 ball api 'url: 'https://8ball.delegator.com/magic/JSON/whatever question you want to ask' 
  //- when the ajax request done, call the render function to display 

//render function, expects a 'response' parameter
  //- use jquery to create an h2 for the question
  //- make the text of the h2 be the question that was asked
  
  //- create a div to hold the answer
  //- give the div a class of anwser
  //- append a paragraph with the 8 balls answer to the answer div you just
  //created
  
  //- prepend the question h2 and the answer div to the element with the class of
  // '.reponse-ui'

// bonus 
// notice the that the response from the 8 ball has a type! 
// if the reponse is Affirmative, make the question green
// if the reponse is Contrary, make the question red.

// super bonus
// check to make sure the user is actually asking a question
// if they aren't asking a question, make the display "I can only answer
// a question" to the response-ui
