console.log("letter.js is working");

function Letter(value) {
	this.value = value;
	this.hidden = true;

	this.hide = function(){
		this.hidden = true;
	}

	this.show = function(){
		this.hidden = false;
	}

	this.render = function(){
		if(this.hidden==true){
			return "_";
		} else if(this.hidden==false){
			return this.value;
		}
	}
}





