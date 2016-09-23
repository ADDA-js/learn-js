var name = prompt('what is your name?');
var age= parseInt(prompt("how old are you?"));

if(age < 18){
  alert("Sorry, you have to be at least 18 to vote.");
} else {
  var choice = prompt("Who will you vote for?");
  alert(name + " age:" + age + " votes for " + choice);
}
