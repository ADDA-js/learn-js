
//hannahs code
// var name=prompt("What's your name");
// var age=prompt("how old are you");
// if (age >= 18){
//     var choose=prompt("who will u vote 4? choose: kanye, voldemort, or squidward");
// }else{
//     alert("try again next year :(");
// };

//sarahs code
var userName = prompt("What's your name?");

var age = parseInt(prompt('Whats your age?'));

if(age < 18){
 alert("I'm sorry, you aren't old enough to vote!");
}
else{
 var registered = confirm("Are you registered to vote?");
}

if(registered == false){
 document.write(window.location = "http://www.dmv.org/ny-new-york/voter-registration.php" );
}
else{
 document.write("Nice work. " + userName + " age " + age + " is registered to vote.");
}