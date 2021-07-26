var readline = require('readline-sync');

var userName = readline.question("What is your name? ")
console.log("Welcome " + userName + " to DO YOU KNOW Suryansh")

var score =0;


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

  console.log("Current score: " +score)
  console.log("-------------------------------------")
  

}

var questions = [{
  question: "What is Suryansh age? ",
  answer: "20"
},

{
  question: "Where do Suryansh live? ",
  answer: "Ludhiana"
},

{
  question: "Suryansh has a pet. What is his name? ",
  answer: "Goldy"
}];



for (var i=0; i<questions.length; i++)
{
  var currentOuestion = questions[i]
  play(currentOuestion.question, currentOuestion.answer)
}

console.log("Your total score is "+score)
  