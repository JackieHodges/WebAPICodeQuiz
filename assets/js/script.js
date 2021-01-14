var timeLeft = 75;
var score = 0;
var correct = true;
var wrong = false;
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
var questionArray = ["This is question one", "this is question two", "this is question 3", "this is question 4", "this is question 5"];
var questionTwoAnsArray = ["This is the wrong one", "this is the right one", "This is the wrong one", "this is the wrong one", "this is the wrong one"];
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
    //questionsArray[0].choices[0]
    choices: ["this is answer 1", "this is answer 2", "this is answer 3", "this is answer 4"],
    answer: "this is answer 3"
  },
  {
    //this question 4 is index 3
    question: "This is question 4",
    //questionsArray[0].choices[0]
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

function pageSetup(){
  // removes h1
  h1El.outerHTML = "";
  // removes button
  startBtn.outerHTML = "";

  // this adds answer buttons into the HTML
  answerOne.innerHTML = "<button type='button' class='btn btn-secondary btn-answerOne' value='correct'></button>";
  answerTwo.innerHTML = "<button type='button' class='btn btn-secondary btn-answerTwo' value='incorrect'></button>";
  answerThree.innerHTML = "<button type='button' class='btn btn-secondary btn-answerThree' value='incorrect'></button>";
  answerFour.innerHTML = "<button type='button' class='btn btn-secondary btn-answerFour' value='incorrect'></button>";
}

// this is the first question to be asked
function askQuestion(){
  console.log("This is question number " + questionNumber);
  // changes h2 text to first question
  h2El.textContent = questionsArray[questionNumber].question;

  // this adds question text from array into button htmls
  document.querySelector(".btn-answerOne").textContent = questionsArray[questionNumber].choices[0];
  document.querySelector(".btn-answerTwo").textContent = questionsArray[questionNumber].choices[1];
  document.querySelector(".btn-answerThree").textContent = questionsArray[questionNumber].choices[2];
  document.querySelector(".btn-answerFour").textContent = questionsArray[questionNumber].choices[3];

}

function checkAnswer(){
  // listener for each button
  answerOne.addEventListener("click", function(){
    if (document.querySelector(".btn-answerOne").textContent == questionsArray[questionNumber].answer){
      youAreCorrect();
    } else {
      youAreWrong;
    }
  });

  answerTwo.addEventListener("click", function(){
    if (document.querySelector(".btn-answerTwo").textContent == questionsArray[questionNumber].answer){
      youAreCorrect();
    } else {
      youAreWrong;
    }
  });

  answerThree.addEventListener("click", function(){
    if (document.querySelector(".btn-answerThree").textContent == questionsArray[questionNumber].answer){
      youAreCorrect();
    } else {
      youAreWrong;
    }
  });

  answerFour.addEventListener("click", function(){
    if (document.querySelector(".btn-answerFour").textContent == questionsArray[questionNumber].answer){
      youAreCorrect();
    } else {
      youAreWrong;
    }
  });
}

// function for when correct answer is clicked
function youAreCorrect (){
  console.log("Correct");
  score = timeLeft;
  console.log("Current score: " + score);
  questionNumber++;
  askQuestion();
}

// function for when wrong answer is clicked
function youAreWrong (){
  console.log("Wrong");
  timeLeft = timeLeft-10;
  score = timeLeft;
  console.log("Current score: " + score);
  questionNumber++;
  askQuestion();
}

// when the start quiz button is clicked, the program will run
startBtn.addEventListener("click", function() {
    setCounterText();
    pageSetup();
    askQuestion();
    checkAnswer();
    // askQuestion();
});