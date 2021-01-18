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
var questionNumber = 1;
var questionIndex = 0;
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

function pageSetup(){
  // removes h1
  h1El.outerHTML = "";
  // removes button
  startBtn.outerHTML = "";

  // this adds answer buttons into the HTML
  answerOne.innerHTML = "<button type='button' class='btn btn-secondary btn-answerOne incorrect'></button>";
  answerTwo.innerHTML = "<button type='button' class='btn btn-secondary btn-answerTwo incorrect'></button>";
  answerThree.innerHTML = "<button type='button' class='btn btn-secondary btn-answerThree incorrect'></button>";
  answerFour.innerHTML = "<button type='button' class='btn btn-secondary btn-answerFour incorrect'></button>";

  //because the buttons will now be created, we can name them here
  answerOneButton = document.querySelector(".btn-answerOne");
  answerTwoButton = document.querySelector(".btn-answerTwo");
  answerThreeButton =  document.querySelector(".btn-answerThree");
  answerFourButton = document.querySelector(".btn-answerFour");
}

// this is the first question to be asked
function askQuestion(){
  console.log("This is question number " + questionNumber);

  if (questionNumber < questionsArray.length){
    
    // changes h2 text to first question
    h2El.textContent = questionsArray[questionIndex].question;

    // this adds question text from array into button htmls
    answerOneButton.textContent = questionsArray[questionIndex].choices[0];
    answerTwoButton.textContent = questionsArray[questionIndex].choices[1];
    answerThreeButton.textContent = questionsArray[questionIndex].choices[2];
    answerFourButton.textContent = questionsArray[questionIndex].choices[3];
    
    checkAnswer();

  } else {
    containerEl.outerHTML="";
    clearInterval(timeInterval);
    score = timeLeft;
    console.log("congrats, you had "+ score + " points!"); 
  }
}

function checkAnswer(){
  // listener for each button
  answersEl.addEventListener("click", function(){
    if (this.textContent == questionsArray[questionIndex].answer){
      youAreCorrect();
    } else {
      youAreWrong();
    }
  });

  // answerTwoButton.addEventListener("click", function(){
  //   if (document.querySelector(".btn-answerTwo").textContent == questionsArray[questionIndex].answer){
  //     youAreCorrect();
  //   } else {
  //     youAreWrong();
  //   }
  // });

  // answerThreeButton.addEventListener("click", function(){
  //   if (document.querySelector(".btn-answerThree").textContent == questionsArray[questionIndex].answer){
  //     youAreCorrect();
  //   } else {
  //     youAreWrong();
  //   }
  // });

  // answerFourButton.addEventListener("click", function(){
  //   if (document.querySelector(".btn-answerFour").textContent == questionsArray[questionIndex].answer){
  //     youAreCorrect();
  //   } else {
  //     youAreWrong();
  //   }
  // });

}

// function for when correct answer is clicked
function youAreCorrect (){
  console.log("Correct");
  questionNumber++;
  questionIndex++;
  askQuestion();
}

// function for when wrong answer is clicked
function youAreWrong (){
  console.log("Wrong");
  timeLeft = timeLeft-10;
  questionNumber++;
  questionIndex++;
  askQuestion();
}

// when the start quiz button is clicked, the program will run
startBtn.addEventListener("click", function() {
    setCounterText();
    pageSetup();
    askQuestion();
});