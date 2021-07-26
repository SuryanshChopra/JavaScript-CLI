var readline = require('readline-sync');

var score =0;

var questionOne = "What is my age? "
var answerOne = "20"

var questionTwo = "Where do you live? "
var answerTwo = "Ludhiana"

function play(question, answer)
{
  var userAnswer = readline.question(question)

  if (userAnswer === answer) {
    console.log("You were right")
    score = score +1
  }
  else {
    console.log("You were wrong")
  }
}

play (questionOne, answerOne)
play (questionTwo, answerTwo)
console.log("Total score is "+score)