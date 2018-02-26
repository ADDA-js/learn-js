//this function fires once the document is loaded and ready
//i'm going to put all the code I want to run in here
//why is this needed??
$(document).ready(function(){
	//all my examples will be 
	$('h1').html("Adam's Todo list");

	//select to create parent
	var list = $('ul'); //this just is just storing the list
	//build the element to insert
	//var listItem = "<li>Send Emails</li>"; //not needed!
	//append that to the parent.
	list.append("<li>Send a letter</li>");

	//create a new h1
	var happy = $('<h1>').text('all done!').css('color', '#BADA55');
	$('.wrapper').append(happy); //add to the dom;

	//find the list item and add css class to it!
	$('li:contains("Teach Class")').addClass('current');
	
	//explicit iteration
	//selecting li will return an array
	/*$('li').each(function(){
		//this is an anonymous function
		$(this).addClass('done');
	})*/

	//this is the same thing
	//implicit iteration
	// $('li').addClass('done');

	var todos = ['eat', 'sleep', 'drink'];

	$(todos).each(function(){
		list.append('<li>'+this+'</li>');
	})

	//add a new item
	$('.add').click(function(){
		var value = $('.newItem').val();
		var todo = $('<li>').text(value);
		$('ul').append(todo);

	})

	//this is a click event
	//only works for items that are in the dom to begin with
	/*$('li').click(function(){
		$(this).toggleClass('done');
	});*/

	
	//delegated click event
	//works for items that were dynamically added!
	$('ul').on('click', 'li', function(element){
		$(element.target).addClass('done');
	});
})




























