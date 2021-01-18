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
    values: ["correct", "incorrect", "incorrect", "incorrect"]
  },
  {
    //this question 3 is index 2
    question: "This is question 3",
    choices: ["this is answer 1", "this is answer 2", "this is answer 3", "this is answer 4"],
    values: ["correct", "incorrect", "incorrect", "incorrect"]
  },
  {
    //this question 4 is index 3
    question: "This is question 4",
    choices: ["this is answer 1", "this is answer 2", "this is answer 3", "this is answer 4"],
    values: ["correct", "incorrect", "incorrect", "incorrect"]
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
      newAnswerChoices.setAttribute("class","btn btn-secondary");
      newAnswerChoices.setAttribute("value", questionsArray[i].values[i]);
      newAnswerChoices.textContent= questionsArray[i].choices[i];
      containerEl.append(newAnswerChoices);
    }

    checkAnswer();

  }

  function checkAnswer(){
    containerEl.addEventListener("click", function(){
      if(this.value === "correct"){
        console.log("correct");
      } else {
        console.log("incorrect");
      }
    })
  }

  startBtn.addEventListener("click", function(){
    setCounterText();
    pageSetup();
  })