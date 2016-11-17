console.log('working yo')

$(document).ready(function(){

	//add an event listener for the button
	$('.hitme').click(addimage)


})

//function addimage
//add an image to the tag

var addimage = function(){
	//lets make an image
	//.attr takes in two parameters,
	//the first is the attribute to effect
	//the second is the text of the attribute
	var myImage = $('<img>').attr('src', 'http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg')
	$('body').append(myImage);
}
