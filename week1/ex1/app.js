var name = prompt('what is your name?')
var age = prompt('how old are you?')
var age2 = parseInt(age)
var candidate = prompt("who will you be voting for? Hilary or Trump?")

console.log(age)
console.log(name)
console.log (candidate)

if(age >= 18){
  if(candidate == 'Trump'){
    alert('are you sure?? WHY??')
  }else if(candidate == 'Hilary'){
    alert("Great! " + name + " Glad that you are voting for " + candidate)
  }  
}else if(age < 18){
  alert("unfortunately you cannot vote yet")
}