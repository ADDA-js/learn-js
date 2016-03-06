
var todolist = ['wake up',
	'eat breakfest',
	'get dressed',
	'go to work',
	'work',
	'go to barnard',
	'drink coffee',
	'teach js']


var wednesday = function(list){

	var newList = document.createElement('ul');
	newList.className = "wednesday";
		
	var title = document.createElement('h2');
	title.innerHTML = "My wednesday to document!"
	newList.appendChild(title);



	document.body.appendChild(newList);

	for(var i = 0; i < list.length; i++){
		var item = document.createElement('li');
		item.innerHTML = list[i];
		newList.appendChild(item);
	}

}

wednesday(todolist);
