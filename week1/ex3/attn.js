alert("js working yo");

var userName = prompt('What\'s your name?');

var payingAttention = true;

while(payingAttention){
          
		  document.write("On " + Date() + " " + userName + " was paying attention <br>");
          payingAttention = confirm('Are you paying attention '+ userName +'?');
          console.log(payingAttention);
}
document.write(userName + " can you look at your phone - and stop paying attention - " + "At " + Date() + " " + userName + " is now not paying attention!");
