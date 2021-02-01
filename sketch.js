var gameState, database, quiz, question, contestant;
var contestantCount;

// global variables used to used in classes ↓.
var title;
var question1;
var option1;
var option2;
var option3;
var option4;
var nameButton;
var optionButton;
var submitButton;
// global variables used to used in classes ↑.


function setup(){
  createCanvas(displayWidth -300, displayHeight -350);
  database = firebase.database();
  quiz = new Quiz();
  question = new Question(); 
}
 

function draw(){
  background("pink");
  quiz.display();
  question.display();
}
