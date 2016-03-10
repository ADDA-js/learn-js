window.onload = function(){
	var clickCount = 0;
	//add click events!
	var bart = document.getElementsByTagName('img')[0];

	bart.addEventListener('click', function(){
		//switch the img src;
		clickCount++;
		console.log(clickCount)
		if(clickCount%2==0){
			bart.src = './img/bart1.png';
		} else {
			bart.src = './img/bart2.png';
		}

	})


}