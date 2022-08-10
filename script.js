var timerCountdown = document.getElementById("timer");
var startButton = document.querySelector("#start");
var container = document.querySelector(".container");
var firstAnswerA = document.querySelector("#correct-1");
var firstAnswerB = document.querySelector("#incorrect-1");
var secondAnswerC = document.querySelector("#incorrect-2");
var secondAnswerD = document.querySelector("#correct-2");
var thirdAnswerA = document.querySelector("#correct-3");
var thirdAnswerB = document.querySelector("#incorrect-3");
var fourthAnswerC = document.querySelector("#incorrect-4");
var fourthAnswerD = document.querySelector("#correct-4");
var fifthAnswerA = document.querySelector("#correct-5");
var fifthAnswerB = document.querySelector("#incorrect-5");
var scoreTally;

// need to use this variable to store score; update value on screen to be able to store in local storage...
//functionality of quiz/incorrect/correct answers!
function startQuiz() {
  console.log("hello");
  countdown();
  var questionOne = document.querySelector("#question-1");
  questionOne.setAttribute("style", "display: block");
}

function firstQuestionCorrect() {
  if (firstAnswerA) {
    var questionTwo = document.querySelector("#question-2");
    questionTwo.setAttribute("style", "display:block");
    var correctNotifyOne = document.querySelector("#correct-message1");
    correctNotifyOne.setAttribute("style", "display: block");
    var incorrectNotifyOne = document.querySelector("#incorrect-message1");
    incorrectNotifyOne.setAttribute("style", "display: none");
  }
}

function firstQuestionIncorrect() {
  if (firstAnswerB) {
    var incorrectNotifyOne = document.querySelector("#incorrect-message1");
    incorrectNotifyOne.setAttribute("style", "display: block");
  }
}

function secondQuestionCorrect() {
  if (secondAnswerD) {
    var questionThree = document.querySelector("#question-3");
    questionThree.setAttribute("style", "display: block");
    var correctNotifyTwo = document.querySelector("#correct-message2");
    correctNotifyTwo.setAttribute("style", "display: block");
    var incorrectNotifyTwo = document.querySelector("#incorrect-message2");
    incorrectNotifyTwo.setAttribute("style", "display: none");
  }
}

function secondQuestionIncorrect() {
  if (secondAnswerC) {
    var incorrectNotifyTwo = document.querySelector("#incorrect-message2");
    incorrectNotifyTwo.setAttribute("style", "display: block");
  }
}

function thirdQuestionCorrect() {
  if (thirdAnswerA) {
    var questionFour = document.querySelector("#question-4");
    questionFour.setAttribute("style", "display: block");
    var correctNotifyThree = document.querySelector("#correct-message3");
    correctNotifyThree.setAttribute("style", "display: block");
    var incorrectNotifyThree = document.querySelector("#incorrect-message3");
    incorrectNotifyThree.setAttribute("style", "display: none");
  }
}
function thirdQuestionIncorrect() {
  if (thirdAnswerB) {
    var incorrectNotifyThree = document.querySelector("#incorrect-message3");
    incorrectNotifyThree.setAttribute("style", "display: block");
  }
}

function fourthQuestionCorrect() {
  if (fourthAnswerD) {
    var questionFive = document.querySelector("#question-5");
    questionFive.setAttribute("style", "display: block");
    var correctNotifyFour = document.querySelector("#correct-message4");
    correctNotifyFour.setAttribute("style", "display:block");
    var incorrectNotifyFour = document.querySelector("#incorrect-message4");
    incorrectNotifyFour.setAttribute("style", "display: none");
  }
}
function fourthQuestionIncorrect() {
  var incorrectNotifyFour = document.querySelector("#incorrect-message4");
  incorrectNotifyFour.setAttribute("style", "display: block");
}

function endGame() {
  if (fifthAnswerA) {
    var endPrompt = document.querySelector("#finish-quiz");
    endPrompt.setAttribute("style", "display: block");
    var correctNotifyFive = document.querySelector("#correct-message5");
    correctNotifyFive.setAttribute("style", "display: block");
    var incorrectNotifyFive = document.querySelector("#incorrect-message5");
    incorrectNotifyFive.setAttribute("style", "display: none");
  }
}

function fifthAnswerIncorrect() {
  var incorrectNotifyFive = document.querySelector("#incorrect-message5");
  incorrectNotifyFive.setAttribute("style", "display: block");
}

var firstAnswerCorrect = document.querySelector("#correct-1").value;
var firstAnswerIncorrect = document.querySelector("#incorrect-1").value;

localStorage.setItem("first answer correct", firstAnswerCorrect);
localStorage.setItem("first answer incorrect", firstAnswerIncorrect);

// TIMER!
function countdown() {
  var timeLeft = 60;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerCountdown.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerCountdown.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerCountdown.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);

  // function wrongAnswer(){
  //     if(firstAnswerB){
  //         timerCountdown.textContent = timeLeft + " seconds remaining";
  //         timeLeft =- 5;
  //     }
  // }
}

startButton.addEventListener("click", startQuiz);
firstAnswerA.addEventListener("click", firstQuestionCorrect);
firstAnswerB.addEventListener("click", firstQuestionIncorrect, countdown);
secondAnswerD.addEventListener("click", secondQuestionCorrect);
secondAnswerC.addEventListener("click", secondQuestionIncorrect);
thirdAnswerA.addEventListener("click", thirdQuestionCorrect);
thirdAnswerB.addEventListener("click", thirdQuestionIncorrect);
fourthAnswerC.addEventListener("click", fourthQuestionIncorrect);
fourthAnswerD.addEventListener("click", fourthQuestionCorrect);
fifthAnswerA.addEventListener("click", endGame);
fifthAnswerB.addEventListener("click", fifthAnswerIncorrect);
