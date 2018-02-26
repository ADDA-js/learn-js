//put code in app.js

$(document).ready(function(){
	//new song
	var songs = ["ran", "red eyes"];
	var list = $('ul');
	for(var i=0; i < songs.length; i++){
		list.append('<li>'+songs[i]+'</li>');
	}

	
})