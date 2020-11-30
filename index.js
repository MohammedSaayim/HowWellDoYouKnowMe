var readlineSync=require('readline-sync');
var chalk = require("chalk")
var userAnswer;
var userName= readlineSync.question('May I have your name?\n');

console.log('Welcome '+userName+' to'+chalk.blue(' HOW WELL DO YOU KNOW SAAYIM'));
questionOne= {
question: "1.Where do I live \n 1.KGF \n 2.Mirzapur ",
answer: "1"
}

questionTwo={
question: "2. Where do I study? \n 1.IIT-B \n 2. DSCE",
answer: "2"
}

questionThree={
  question: "3. What's my favorite food? \n 1. Biryani \n 2. Roti Sabzi\n",
  answer: "1"
}

questionFour={
  question: "4. What do I study?\n 1.Engineering \n 2.Medical ",
  answer: "1"
}

questionFive={
  question: "5. What is the name of my cat \n 1. Rosita \n 2. Nameless",
  answer: "2"
}

var score=0;
var highScore=["Rocky=4","Jacky=3"];
function play(question, answer){
userAnswer=readlineSync.question(chalk.yellow(question)+'\n');
if(userAnswer===answer)
{
  console.log(chalk.green('Right answer'));
  score++;
  
}
else
console.log(chalk.red('wrong answer')+', the right answer is:'+chalk.green(answer));
console.log(chalk.bgBlack('Your current score is '+score));

}

play(questionOne.question,questionOne.answer);

play(questionTwo.question,questionTwo.answer);

play(questionThree.question,questionThree.answer);

play(questionFour.question,questionFour.answer);

play(questionFive.question,questionFive.answer);

console.log(chalk.bgCyan('Yay! you scored '+ score+'/5'));

console.log('Check out the high scores: \n'+chalk.inverse.blue(highScore));
