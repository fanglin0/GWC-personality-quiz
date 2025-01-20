/*Add your JavaScript here*/

var catScore = 0;
var dogScore = 0;
var questionCount = 0;
var result = document.getElementById("result");
let restart = document.getElementById("restart");

let q1a1 = document.getElementById("q1a1");
let q1a2 = document.getElementById("q1a2");

let q2a1 = document.getElementById("q2a1");
let q2a2 = document.getElementById("q2a2");

let q3a1 = document.getElementById("q3a1");
let q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", increaseDogScore);
q1a2.addEventListener("click", increaseCatScore);

q2a1.addEventListener("click", increaseDogScore);
q2a2.addEventListener("click", increaseCatScore);

q3a1.addEventListener("click", increaseDogScore);
q3a2.addEventListener("click", increaseCatScore);

restart.addEventListener("click", resetResult);

function increaseDogScore() {
  dogScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " dogScore = " + dogScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function increaseCatScore() {
  catScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " catScore = " + catScore);

  if (questionCount == 3) {
    console.log("The quiz is done!");
    updateResult();
  }
}

function updateResult() {
  if (dogScore >= 2) {
    result.innerHTML = "You are a dog person!";
    console.log("You are a dog person!");
  } else if (catScore >= 2) {
    result.innerHTML = "You are a cat person!";
    console.log("You are a cat person!");
  }
}

function resetResult(){
dogScore = 0;
catScore= 0;
questionCount= 0;
  result.innerHTML = ""
  console.log("The quiz has been reset.");
  ;
}
  
  
