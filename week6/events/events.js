// document.addEventListener('click', function(){
// 	alert('click heard!');
// })
var archive = [];
var add = document.getElementsByClassName('add')[0];
var todo = document.getElementsByTagName('ul')[0];
var done = document.getElementsByTagName('ul')[1];
var clear = document.getElementsByClassName('clear')[0];

add.addEventListener('click', function(){
	console.log('click event on button heard');

	var text = document.getElementsByClassName('newItem')[0].value;

	var item = document.createElement('li');
	item.innerHTML = text;

	todo.appendChild(item);
});

todo.addEventListener('click', function(element){
	console.log('ul click heard');
	// debugger;

	element.target.remove();	
	element.target.className = 'done';
	done.appendChild(element.target);
	// archive.push(element.target); //just use this to show that the item doesn't get deleted
})

