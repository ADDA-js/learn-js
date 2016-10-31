//this function fires once the document is loaded and ready
//i'm going to put all the code I want to run in here

$(document).ready(function(){
	$('#title').html('Daily to do list');

	var list = $('ul');
	list.prepend('<li>get up</li>');
	list.append('<li>snore</li>');

	// one line!
	$('ul').append('<li>dream</li>');

	//cycle 1) create a new element, 2) then append/prepend
	var happy = $('<h1>').text('all done!').css('color', '#BADA55');
	
	//wrapper is a parent element
	$('.wrapper').append(happy)

	//same thing all in one line	
	// $('.wrapper').append($('<h1>').text('all done!'))	

	//Give 'Teach Class' a class name of current
	$('li:contains("Teach Class")').addClass('current');

	//iterators
	//explicit iteration, basically a for loop to go over the list
	// $('li').each(function(){
	// 	$(this).addClass('done');
	// });

	//implicit iteration, since li is an array, it will go over the array
	// $('li').addClass('done');

	//add event listener
	$('li').click(function(){
		$(this).css('text-decoration', 'line-through')
	})

});





















