window.onload = function(){

//add a single song to the playlist
  var playlist = document.getElementsByClassName('playlist')[0]; //sing get by class returns array, assign to the first value, our playlist
  //create song
  var newSong = document.createElement('li'); //create a new element
  newSong.innerHTML = "A Seat at the Table - Solange"; //change the text of the element just created
  playlist.appendChild(newSong); //add to the end of playlist element

  //add many songs using iteration
  var newSongs = ["Sunday Morning - Velvet Underground", "Ceremony - New Order", "Moonjack - Animal Collective"]
  
  for(var song of newSongs){ //fancy for loop
    //song is now just the items in the newSongs array
    var anotherSong = document.createElement('li');
    anotherSong.innerHTML = song; //assign the current song text to the element just created
    playlist.appendChild(anotherSong);
  }

  //add an event listener to the songs, if they are clicked mark them as played
  var songItems = document.getElementsByTagName('li'); //will be an array of all the li tags
  
  for(var li of songItems){
    li.addEventListener('click', makeCurrent); //add click listener, will call makeCurrent function
  }
}

//make current function, just adds a class of 'now-playing'
function makeCurrent(){
  this.classList.add('now-playing'); //what's this? whatever is clicked! add the class of now-playing
}

/* 
//challenge code, only one song can be plaing at once.
function makeCurrent(){
  var songItems = document.getElementsByTagName('li'); //will be an array of all the li tags

  //loop through all the songs, if a song has the class now-playing, remove it 
  for(var li of songItems){
    if(li.classList.contains('now-playing')){ //this returns true if the song has that class!
      li.classList.remove('now-playing'); //this removes the class name
    }
  }

  this.classList.add('now-playing'); //now we can add the classname to the clicked song
}
*/

//function to add a song using the button 
