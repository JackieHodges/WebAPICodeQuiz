var timeLeft = 75;
var score = 0;
var countEl = document.querySelector("#count");
var startBtn = document.querySelector(".start-btn");
var h1El = document.querySelector("h1");
var h2El = document.querySelector("h2");
var containerEl = document.querySelector("container");
var answerOne = document.querySelector("#answer-one");
var answerTwo = document.querySelector("#answer-two");
var answerThree = document.querySelector("#answer-three");
var answerFour = document.querySelector("#answer-four");
var questionArray = ["This is question one", "this is question two", "this is question 3", "this is question 4", "this is question 5"];
var questionTwoAnsArray = ["This is the wrong one", "this is the right one", "This is the wrong one", "this is the wrong one", "this is the wrong one"];


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
  answerOne.addEventListener("click", youAreCorrect);
  answerTwo.addEventListener("click", youAreWrong);
  answerThree.addEventListener("click", youAreWrong);
  answerFour.addEventListener("click", youAreWrong);
}

// this is the second question to be asked
function askQuestionTwo(){
  // changes h2 text to second question
  h2El.innerText = questionArray[1];

  // this adds answer buttons into the HTML
  // answerOne.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-answerOne\">Answer 1</button>";
  // answerTwo.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-answerTwo\">Answer 2</button>";
  // answerThree.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-answerThree\">Answer 3</button>";
  // answerFour.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-answerFour\">Answer 4</button>";

  answerOne.innerText = questionTwoAnsArray[0];
  answerTwo.innerText = questionTwoAnsArray[1];
  answerThree.innerText = questionTwoAnsArray[2];
  answerFour.innerText = questionTwoAnsArray[3];

  // checks answer
  answerOne.addEventListener("click", youAreWrong);
  answerTwo.addEventListener("click", youAreCorrect);
  answerThree.addEventListener("click", youAreWrong);
  answerFour.addEventListener("click", youAreWrong);
}

// function for when correct answer is clicked
function youAreCorrect (){
  console.log("Correct");
  score = timeLeft;
  console.log("Current score: " + score);
}

// function for when wrong answer is clicked
function youAreWrong (){
  console.log("Wrong");
  timeLeft = timeLeft-10;
  score = timeLeft;
  console.log("Current score: " + score);
}

// when the start quiz button is clicked, the program will run
startBtn.addEventListener("click", function() {
    setCounterText();
    askQuestionOne();
    // askQuestionTwo();
});