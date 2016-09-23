var name = prompt('what is your name?');
var age= parseInt(prompt("how old are you?"));

if(age < 18){
  alert("Sorry, you have to be at least 18 to vote.");
} else {
  var registered = confirm('Are you registered to vote?');

  if(registered == true){
  var choice = prompt("Who will you vote for?");
  alert(name + " age:" + age + " votes for " + choice);
  } else {
    alert(name + " age" + age + " is not registered to vote");
    //redirect to the website to register
    window.location = "http://www.elections.ny.gov/VotingRegister.html";
  }
}
