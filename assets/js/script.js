// this is the timer
var count = 75;

var countEl = document.querySelector("#count");
var startBtn = document.querySelector(".start-btn");

function setCounterText() {
    var timeLeft = 75;
  
    var timeInterval = setInterval(function() {
      countEl.textContent = timeLeft;
      timeLeft--; 

    }, 1000);
}

startBtn.addEventListener("click", function() {
    setCounterText();
});