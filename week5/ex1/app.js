//bands
var band = ['The Beatles', 'Mac Demarco', 'War on Drugs', 'Bob Dylan', 'Duke Ellington'];

var wrapper = document.getElementsByClassName('wrapper')[0];

console.log(wrapper);

var bandList = document.createElement('ol');



for(var i = 0; i < band.length; i++){
	var item = document.createElement('li');
	item.innerHTML = band[i];
	bandList.appendChild(item);
}

wrapper.appendChild(bandList); 

wrapper.addEventListener('click', function(element){
	element.target.className = 'favorite';

})
