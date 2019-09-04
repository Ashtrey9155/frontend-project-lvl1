#!/usr/bin/env node
import readlineSync from 'readline-sync';

const hello = () => console.log('\nWelcome to the Brain Games! \n');

const getName = () => readlineSync.question('May I have your name? ');

const retWrongAnswer = (answer, correctAnswer, name) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);

const retCongratulations = (name) => console.log(`Congratulations, ${name}`);

const game = (name, arrayQuestion) => {
  const iter = (count) => {
    if (count === 3) {
      return retCongratulations(name);
    }
    const question = arrayQuestion();
    console.log(`\nQuestion: ${question[0]}`);
    const answer = readlineSync.question('\nYour answer: ');
    if (answer !== question[1]) {
      return retWrongAnswer(answer, question[1], name);
    }

    console.log('Correct!\n');
    return iter(count + 1);
  };
  iter(0);
};

export {
  hello, getName, game,
};
