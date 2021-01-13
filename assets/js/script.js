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

// this is the timer
function setCounterText() {
  
    var timeInterval = setInterval(function() {
      countEl.textContent = timeLeft;
      timeLeft--; 

      if (timeLeft === 0){
        countEl.textContent = "0";
        clearInterval(timeInterval);
      }

    }, 1000);
}

// this is the first question to be asked
function askQuestionOne(){
  // removes h1
  h1El.outerHTML = "";
  // removes button
  startBtn.outerHTML = "";
  // changes h2 text to first question
  h2El.innerText = "This is question number one";
  // this adds answer buttons into the HTML
  answerOne.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-answerOne\">Answer 1</button>";
  answerTwo.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-answerTwo\">Answer 2</button>";
  answerThree.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-answerThree\">Answer 3</button>";
  answerFour.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-answerFour\">Answer 4</button>";

  // checks answer
  if (answerOne.clicked === true){
    console.log("You're correct");
  } else {
    console.log("You're incorrect");
  }
}

// when the start quiz button is clicked, the program will run
startBtn.addEventListener("click", function() {
    setCounterText();
    askQuestionOne();
});