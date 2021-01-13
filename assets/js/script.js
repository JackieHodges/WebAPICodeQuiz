// this is the timer
var timeLeft = 75;

var countEl = document.querySelector("#count");
var startBtn = document.querySelector(".start-btn");
var h1El = document.querySelector("h1");
var h2El = document.querySelector("h2");

function setCounterText() {
    // var timeLeft = 75;
  
    var timeInterval = setInterval(function() {
      countEl.textContent = timeLeft;
      timeLeft--; 

      if (timeLeft === 0){
        countEl.textContent = "0";
        clearInterval(timeInterval);
      }

    }, 1000);
}

function askQuestionOne(){
  // removes h1
  h1El.outerHTML = "";
  // removes button
  startBtn.outerHTML = "";
  // changes h2 to first question
  h2El.innerHTML = "This is question number one";


}

startBtn.addEventListener("click", function() {
    setCounterText();
    askQuestionOne();
});