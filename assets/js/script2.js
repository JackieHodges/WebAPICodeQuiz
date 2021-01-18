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
var questionIndex = 0;
var questionsArray = [
  {
    //this question one is index 0, questionsArray[0].question;
    question: "This is question 1",
    //questionsArray[0].choices[0]
    choices: ["this is answer 1", "this is answer 2", "this is answer 3", "this is answer 4"],
    values: ["correct", "incorrect", "incorrect", "incorrect"]
  },
  {
    //this question 2 is index 1
    question: "This is question 2",
    choices: ["this is answer 1", "this is answer 2", "this is answer 3", "this is answer 4"],
    values: ["incorrect", "correct", "incorrect", "incorrect"]
  },
  {
    //this question 3 is index 2
    question: "This is question 3",
    choices: ["this is answer 1", "this is answer 2", "this is answer 3", "this is answer 4"],
    values: ["incorrect", "incorrect", "correct", "incorrect"]
  },
  {
    //this question 4 is index 3
    question: "This is question 4",
    choices: ["this is answer 1", "this is answer 2", "this is answer 3", "this is answer 4"],
    values: ["incorrect", "incorrect", "incorrect", "correct"]
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
    // hides welcome html and start button
    h1El.hidden = true;
    startBtn.hidden = true;

    // sets question
    h2El.textContent = questionsArray[questionIndex].question;   

    // this adds answer buttons into the HTML
    for(var i = 0; i < questionsArray.length; i++){
      // creates answer buttons
      newAnswerChoices = document.createElement("button");
      newLine = document.createElement("br");
      newAnswerChoices.setAttribute("class","btn btn-secondary");
      newAnswerChoices.setAttribute("value", questionsArray[questionIndex].values[i]);
      newAnswerChoices.textContent= questionsArray[questionIndex].choices[i];
      containerEl.append(newAnswerChoices);
    }

    checkAnswer();

  }

  function nextQuestion(){
    if (questionIndex < 4){
      console.log("the next question index is ", questionIndex);
      // sets new question
      h2El.textContent = questionsArray[questionIndex].question;  
      for(var i = 0; i < questionsArray.length; i++){
        // changes values for new question
        document.getElementsByClassName("btn-secondary")[i].setAttribute("value", questionsArray[questionIndex].values[i]);
      }
    } else {
      clearInterval(timeInterval);
      h2El.textContent = "Game Over";
      containerEl.hidden= true;
    }
  }

  function checkAnswer(){
    var allButtons = document.querySelectorAll(".btn-secondary");
    allButtons.forEach(function(allButtons){
      allButtons.addEventListener("click", function(){
        // var humanGuess = this.value;
        // console.log(humanGuess);
        if(this.value === "correct"){
          console.log("correct");
          questionIndex++;
          nextQuestion();
        } else {
          console.log("incorrect");
          questionIndex++;
          nextQuestion();
        }
      })
    })
  }

  startBtn.addEventListener("click", function(){
    setCounterText();
    pageSetup();
  })