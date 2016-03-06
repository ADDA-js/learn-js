// ### You Do
// + Open domEx.html
// + in HTML create a div, add the classname of "wrapper"
// + in JS, make an array of five or your favorite bands
// + use `document.createElement` to create a ul
// + Make a for loop that creates list items of your favorite bands, append each band to the ul
// + After the for loop append the ul to wrapper
// + Append the wrapper to the body
// + In the Inspect Console, remove a band from the ul, is it still in the playlist?
// + BONUS, when a band name is clicked, add some CSS to signify it as your favorite, you can only have one favorite.

var wrapper = document.getElementsByClassName('wrapper')[0];

var playlist = ['War on Drugs', 'Mac Demarco', 'Bob Dylan', 'Daft Punk', 'Grimes']

var ul = document.createElement('ul');

for(var i = 0; i < playlist.length; i++){
	
	console.log('w')
	var item = document.createElement('li');
	item.innerHTML = playlist[i];
	ul.appendChild(item);
}

wrapper.appendChild(ul);

//Bonus 1
ul.addEventListener('click', function(target){
	var all = ul.children;
	debugger;
	target.classname = 'favorite';
})