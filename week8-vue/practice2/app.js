// example of a omdb search for the movie 'point break'
url = 'http://www.omdbapi.com/?apikey=6ebc7ebd&t=point+break&y=&plot=full&r=json'

//storing our vue instance in a var
var vue = new Vue({
  el: '#app',
  data: {
    movie: {}, //empty object, replace with a resopnse from omdb later
    search: "", //search term to use
  },
})

// when the user presses the go button, 
// set the movie to the response from a omdb api call
// display the pertinent details of the movie.

//Bonus, if the movie received an award, put a start next to the title.
//Super Bonus, add the movie poster, refer to the omdb reference
