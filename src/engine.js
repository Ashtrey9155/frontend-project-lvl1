#!/usr/bin/env node
import readlineSync from 'readline-sync';

const game = (ruleGame, arrayQuestion) => {
  console.log('\nWelcome to the Brain Games!! \n');
  console.log(`${ruleGame}`);
  const name = readlineSync.question('May I have your name? ');
  const iter = (count) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }
    const question = arrayQuestion();
    console.log(`\nQuestion: ${question[0]}`);
    const answer = readlineSync.question('\nYour answer: ');
    if (answer !== question[1]) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question[1]}'. \nLet's try again, ${name}!`);
    }

    console.log('Correct!\n');
    return iter(count + 1);
  };
  iter(0);
};

export default game;
