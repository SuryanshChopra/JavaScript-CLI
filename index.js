var readline = require('readline-sync');
const chalk = require('chalk');


var userName = readline.question("What is your name? ")
console.log("Welcome " + userName + " to MARVEL QUIZ")

var score =0;


function play(question, answer)
{
  var userAnswer = readline.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("You were right"));
    score = score +1
  }
  else {
    console.log(chalk.red("You were wrong"));
  }

  console.log("Current score: " +score)
  console.log("-------------------------------------")
  

}

var questions = [{
  question: `
  What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? 
  a: 2005
  b: 2008
  c: 2012
  
  `,
  answer: "b"
},

{
  question: 
  `Which Avenger does Thor team up with in Thor: Ragnarok?
  a: Hulk
  b: Hawkeye
  c: Loki 

  `,
  answer: "a"
},

{
  question: 
  `In which film did Hawkeye first appear?
  a: Captain America: The first Avenger
  b: Thor
  c: Iron Man 2 
  `,
  answer: "b"
},

{
  question: 
  `What is the Falcon’s real name?
  a: Sam Wilson
  b: Elijah Bradley
  c: Captain America 

  `,
  answer: "a"
},

{
  question: 
  `What fictional alien metal gives the Wakandans their power?
  a: Vibranium
  b: Adamantium
  c: Unobtainium 

  `,
  answer: "a"
},

{
  question: 
  `What is the name of the alien race Loki teams up with in Avengers Assemble?
  a: Kree
  b: Skrulls
  c: Chitauri

  `,
  answer: "c"
},

{
  question: 
  `Who is Black Panther’s sister?
  a: Ramonda
  b: Nadia
  c: Shuri

  `,
  answer: "c"
},

{
  question: 
  `What is Tony Stark’s final line in the first Iron Man (not including post-credits)?
  a: Avengers Assemble
  b: I am iron man
  c: I can do this all day

  `,
  answer: "b"
}
];





for (var i=0; i<questions.length; i++)
{
  var currentOuestion = questions[i]
  play(currentOuestion.question, currentOuestion.answer)
}

console.log("Your total score is "+score)
