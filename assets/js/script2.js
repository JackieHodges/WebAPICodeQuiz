var timeLeft = 75;
var score = 0;
var countEl = document.querySelector("#count");
var startBtn = document.querySelector(".start-btn");
var h1El = document.querySelector("h1");
var h2El = document.querySelector("h2");
var containerEl = document.querySelector("container");
var answersEl = document.querySelector("#answer-options");
var answerOne = document.querySelector("#answer-one");
var answerTwo = document.querySelector("#answer-two");
var answerThree = document.querySelector("#answer-three");
var answerFour = document.querySelector("#answer-four");
var timeInterval;
var questionNumber = 0;
var questionsArray = [
  {
    //this question one is index 0, questionsArray[0].question;
    question: "This is question 1",
    //questionsArray[0].choices[0]
    choices: ["this is answer 1", "this is answer 2", "this is answer 3", "this is answer 4"],
    answer: "this is answer 1"
  },
  {
    //this question 2 is index 1
    question: "This is question 2",
    choices: ["this is answer 1", "this is answer 2", "this is answer 3", "this is answer 4"],
    answer: "this is answer 2"
  },
  {
    //this question 3 is index 2
    question: "This is question 3",
    choices: ["this is answer 1", "this is answer 2", "this is answer 3", "this is answer 4"],
    answer: "this is answer 3"
  },
  {
    //this question 4 is index 3
    question: "This is question 4",
    choices: ["this is answer 1", "this is answer 2", "this is answer 3", "this is answer 4"],
    answer: "this is answer 4"
  }
]

// this is the timer
function setCounterText() {
  
    timeInterval = setInterval(function() {
      countEl.textContent = timeLeft;
      timeLeft--; 

      if (timeLeft === 0){
        countEl.textContent = "0";
        clearInterval(timeInterval);
      }

    }, 1000);
}

// this sets up the page to be created 
function pageSetup(){
    // removes h1
    h1El.outerHTML = "";
    // removes button
    startBtn.outerHTML = "";

    // this adds answer buttons into the HTML
    for(var i = 0; i < questionsArray.length; i++){
    
    answerOne.innerHTML = "<button type='button' class='btn btn-secondary btn-answerOne incorrect'></button>";
    answerTwo.innerHTML = "<button type='button' class='btn btn-secondary btn-answerTwo incorrect'></button>";
    answerThree.innerHTML = "<button type='button' class='btn btn-secondary btn-answerThree incorrect'></button>";
    answerFour.innerHTML = "<button type='button' class='btn btn-secondary btn-answerFour incorrect'></button>";
    }

  }