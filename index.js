var readline = require('readline-sync');
var score = 0;

var questionOne = "Q. Am i older than 20? "
var answerOne = "yes"
var questionTwo = "Q. Are you currently pursuing B.COM? "
var answerTwo = "no"

var age = readline.question(questionOne);


if (age === answerOne) {
  console.log("->You are right");
  score =score +1;
  
}
else {
  console.log("->You are wrong")
  
}

var stream = readline.question(questionTwo);

if (age === answerTwo) {
  console.log("->You are right");
  score =score +1;
  
}
else {
  console.log("->You are wrong")
  
}
console.log("Total Score :" + score)

