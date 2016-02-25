var animals = ['parrot', 'bear', 'tiger'];

var inList = function(search){
	if (animals.indexOf(search) != -1) {
		return true;
	} else if(animals.indexOf(search) == -1){
		return false;
	}
}

var getRandom = function(array){
	var randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

// make a list of 5 of your favorite bands/musicians and put it inside of an
// array and store that into a variable called myFavoriteMusicalArtists (make
// all your options lower case) ask the user for a band/artist, turn the user
// input lower case and then tell the user if you like the band too

//  string.toLowerCase() -> will return a lower case copy