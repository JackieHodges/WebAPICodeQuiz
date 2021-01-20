var timeLeft = 75;
var score = 0;
var countEl = document.querySelector("#count");
var startBtn = document.querySelector(".start-btn");
var h1El = document.querySelector("h1");
var h2El = document.querySelector("h2");
var highscoreEl = document.querySelector("#highscores");
highscoreEl.hidden=true;
var answersEl = document.querySelector("#answer-options");
var answerOne = document.querySelector("#answer-one");
var answerTwo = document.querySelector("#answer-two");
var answerThree = document.querySelector("#answer-three");
var answerFour = document.querySelector("#answer-four");
var timeInterval;
var questionIndex = 0;
var initialInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var restartButton = document.querySelector("#restart");
var userInitialSpan = document.querySelector("#user-initials");
var userScoreSpan = document.querySelector("#user-score");
var userResults = document.querySelector("#user-results");
var highScoresArray = [];
var gameNumber = 0;
var questionsArray = [
  {
    //this question one is index 0, questionsArray[0].question;
    question: "Which event occurs when the user clicks on an HTML element?",
    //questionsArray[0].choices[i]
    choices: ["onClick", "onMouseClick", "onChange", "onMouseOver"],
    values: ["correct", "incorrect", "incorrect", "incorrect"]
  },
  {
    //this question 2 is index 1
    question: "How do you declare a JavaScript variable?",
    choices: ["v carName;", "var carName;", "variable carName;", "carName;"],
    values: ["incorrect", "correct", "incorrect", "incorrect"]
  },
  {
    //this question 3 is index 2
    question: "Which operator is used to assign a value to a variable?",
    choices: ["-", "x", "=", "*"],
    values: ["incorrect", "incorrect", "correct", "incorrect"]
  },
  {
    //this question 4 is index 3
    question: "How does a FOR loop start?",
    choices: ["for (i = 0; i <= 5)", "for i = 1 to 5", "for (i <= 5; i++)", "for (i = 0; i <= 5; i++)"],
    values: ["incorrect", "incorrect", "incorrect", "correct"]
  }
]

// this is the timer
function setCounterText() {  
    timeInterval = setInterval(function() {
      countEl.textContent = timeLeft;
      timeLeft--; 

      if (timeLeft === 0){
        // when timer hits zero, game is over and you get zero points
        showHighscore();
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
      answersEl.append(newAnswerChoices);
      answersEl.append(newLine);
    }

    checkAnswer();
}

function checkAnswer(){
  // resultNotification.innerHTML="";
  var allButtons = document.querySelectorAll(".btn-secondary");
  // selects all buttons on the page and applies event listener to each
  allButtons.forEach(function(allButtons){
    allButtons.addEventListener("click", function(){
      if(this.value === "correct"){
        alert("Correct!");
        console.log("correct");
        questionIndex++;
        nextQuestion();
      } else {
        alert("Incorrect!");
        console.log("incorrect");
        // 10 second penalty for choosing wrong
        timeLeft=timeLeft-10;
        questionIndex++;
        nextQuestion();
      }
    })
  })
}

function nextQuestion(){ 
  // checks to ensure questions are remaining 
  if (questionIndex < 4){
    // sets new question
    h2El.textContent = questionsArray[questionIndex].question; 

    for(var i = 0; i < questionsArray.length; i++){
      // changes answer choices
      document.getElementsByClassName("btn-secondary")[i].textContent= questionsArray[questionIndex].choices[i];
      // changes values of correct/incorrect for new question set in question array
      document.getElementsByClassName("btn-secondary")[i].setAttribute("value", questionsArray[questionIndex].values[i]);
    }

  } else {
      // no questions are remaining, show highscore page.
      showHighscore();
  }
}

function showHighscore(){
  // set the page
  clearInterval(timeInterval);
  score = timeLeft;
  answersEl.hidden= true;
  highscoreEl.hidden= false;
  h1El.hidden= false;
  h1El.textContent = "Game Over";
  h2El.textContent = ("Your score is " + score);
  countEl.textContent = timeLeft;
  // display any stored scores (if available)
  init();

  // listener for submit button on highscore page
  submitButton.addEventListener("click", function(event){
    event.preventDefault();
    var user = {
      initials: initialInput.value,
      score: score
    }
    // add entered data to highscore array
    highScoresArray.push(user.initials, user.score);
    storeScores();
    renderLastSubmit();
  })

  // listener for resetart button
  restartButton.addEventListener("click", function() {
    document.location.href = "/Users/jackiehodges/ClassCode/Homework/WebAPICodeQuiz/index.html";
  })
}

// write stored data into list
function renderLastSubmit(){
  // clear the previous list to show new list
  userResults.innerHTML = "";
  // each data from the user is 2 items
  for (var i = 0; i < highScoresArray.length; i=i+2){
    var li = document.createElement("li");
    li.textContent = highScoresArray[i] + " - " + highScoresArray[i+1];
    var ul = document.querySelector("ul");
    ul.appendChild(li);
  }
}

function init(){
  var storedScores = JSON.parse(localStorage.getItem("highScoresArray"));
  if (storedScores !== null) {
    highScoresArray = storedScores;
  }
  renderLastSubmit();
}

function storeScores(){
  localStorage.setItem("highScoresArray", JSON.stringify(highScoresArray));
}

// start button listener for beginning of game
startBtn.addEventListener("click", function(){
  setCounterText();
  pageSetup();
})