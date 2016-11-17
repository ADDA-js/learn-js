$(document).ready(function() {
  //delegated click function for the add to playlist button
  $('.results').on('click', '.add', function(e) {
    console.log(e);
    console.log(this);
   //this is a hack, I assigned fake html attributes to the tag, see the
    //get().done function

    var song = $(e.target).attr('song');
    var artist = $(e.target).attr('artist');
    //use them as parameters for the function that does a .post request
    addByClick(song, artist);

  });
  
  //call the spotify api when called
  $('.search').click(search);
})


//add the song by clicking on the tittle
var addByClick = function(song, artist) {
  var key = 'dYCUBk0KGp5svzfr2JU2rT'
  var event = 'spotify'

  $.post('https://maker.ifttt.com/trigger/' + event +
    '/with/key/' + key, {
      value1: song,
      value2: artist
    });

  $('.results').empty();
}

var search = function() {
    var searchBox = $('.search-term');
    
    var query = searchBox.val();
    searchBox.val("");  
   
    $('.results').empty(); //empty out the result wrapper
    
    //make an ajax request using the get function, could have used .ajax() too
    $.get('https://api.spotify.com/v1/search?q=' + query + '&type=track').done(
        function(response) {

          //response is json, i used the console to figure out the structure
          for (var i = 0; i < response.tracks.items.length; i++) {
            //this is the current item from the json, saves some typing
            var current = response.tracks.items[i]
            
            //build some divs that will get filled
            var div = $('<div>').addClass('track clear')            
            var img = $('<img>').attr('src', current.album.images[1].url);
            img.addClass('song-img');
            
            //build the song info div
            var info = $('<div>').addClass('song-info');
            var track = $('<h1>').text(current.name).addClass('title');
            var artist = $('<h2>').text(current.artists[0].name).addClass('artist');
            var album = $('<p>').text(current.album.name).addClass('album');
            
            //add a butto with the class that is being watched
            var button = $('<button>').addClass('add').text('ADD TO PLAYLIST');
           
            //build the data attributes into the div tag
            button.attr('artist', current.artists[0].name).attr('song', current.name);
            
            //append each to info div 
            info.append(track, artist, album, button);
           
            //appen to the track div
            div.append(img, info);

            //append the div to results
            $('.results').append(div);
          } //end of the for loop
        }) //end of get callback

  } //end of the search function
