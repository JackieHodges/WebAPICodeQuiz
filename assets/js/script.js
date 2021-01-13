// this is the timer
var timeLeft = 75;

var countEl = document.querySelector("#count");
var startBtn = document.querySelector(".start-btn");
var h1El = document.querySelector("h1");
var h2El = document.querySelector("h2");
var containerEl = document.querySelector("container");
var answerOne = document.querySelector("#answer-one");
var answerTwo = document.querySelector("#answer-two");
var answerThree = document.querySelector("#answer-three");
var answerFour = document.querySelector("#answer-four");

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
  // changes h2 text to first question
  h2El.innerText = "This is question number one";
  // this adds answer options HTML
  answerOne.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-answerOne\">Answer 1</button>";
  answerTwo.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-answerTwo\">Answer 2</button>";
  answerThree.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-answerThree\">Answer 3</button>";
  answerFour.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-answerFour\">Answer 4</button>";
}

startBtn.addEventListener("click", function() {
    setCounterText();
    askQuestionOne();
});