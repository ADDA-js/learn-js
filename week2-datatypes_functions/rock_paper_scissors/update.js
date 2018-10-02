//Look but Don't touch!
window.onload = function(){
 setScores();
}

function update() {
  //get which value the user has checked
  setUserPlay();
  setComputerPlay();
  checkGame();
  setScores();
}

function setUserPlay() {
  var inputStatus = {
    rock: document.getElementById('rock').checked,
    paper: document.getElementById('paper').checked,
    scissors: document.getElementById('scissors').checked
  }

  for (var play in inputStatus) {
    if(inputStatus[play]) userPlay = play;
  }
}

function setScores() {
  var uScore = document.getElementById('user-score');
  uScore.innerHTML = userscore;
  var cScore = document.getElementById('computer-score');
  cScore.innerHTML = computerscore;
}
