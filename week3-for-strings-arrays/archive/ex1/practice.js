//practice.js

var myFavoriteMusicalArtists=["solange","chance the rapper", "chloe x halle", "alina baraz and galimatias", "kendrick lamar"];

var uFav=prompt("Who's your favorite artist?");

uFav=uFav.toLowerCase();

var index = myFavoriteMusicalArtists.indexOf(uFav);

console.log(index);

if(index > -1){
	alert('I like that band too!');
} else if(index == -1){
	alert('Sorry, not one of my favorites');
}