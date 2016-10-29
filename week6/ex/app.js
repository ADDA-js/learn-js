$(document).ready(function(){
	$('#title').text("Olivia's Playlist");

	var list = $('.playlist');

	var song = $('<li>').text('Mad by Solange').addClass('now-playing')	
	// debugger;
	list.append(song)
	list.append('<li>Thriller by MJ</li>')

	// $('li:first-child').addClass('now-playing');
	$('li').addClass('played')

	$.each(['one', 'two', 'three'], function(index, item){
		$('ul').append('<li>' + item + '</li>')
	})


})