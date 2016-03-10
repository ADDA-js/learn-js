window.onload = function(){


	var wrapper = document.getElementById('wrapper');

	var rows =3;
	var columns =3;

	for(var i = 0; i < rows; i++){
		var row = document.createElement('div');
		row.className = 'row';

		for(var j = 0; j < columns; j++){
			var box = document.createElement('div');
			// box.innerText(i + " " + j);
			box.className = 'box';
			row.appendChild(box);
		}

		wrapper.appendChild(row);
	}





}

