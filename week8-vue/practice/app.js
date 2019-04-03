// create a playlist title in data
// in html display the title from data
// loop through and display the songs
// if a song is clicked, change playing to true.
// if a song is playing, make it have the class of true.
// only one song can be playing at a time!
// create an input to create new songs. hint, separate inputs for artists and title.

new Vue({
  el: '#app',
  data: {
    songs: [
      {title: '7 Rings', artist: 'Ariana Grande', playing: false},
      {title: 'Please Me', artist: 'Cardi B', playing: false},
      {title: 'Going Bad', artist: 'Meek Mill', playing: false},
    ]
  },
})
