#!/usr/bin/env node
import readlineSync from 'readline-sync';
import index from '../index';
import random from '../random';
import hello from '../hello';
import wrongAnswer from '../incorrectAnswer';

const returnGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return returnGcd(b, a % b).toString();
};

const maxCountToRandom = 50;
hello();
console.log('Find the greatest common divisor of given numbers.\n');
const name = index();
console.log(`Hello, ${name}`);

const game = (count) => {
  if (count === 3) {
    return console.log(`Congratulations, ${name}`);
  }
  const randomNumber1 = random(maxCountToRandom);
  const randomNumber2 = random(maxCountToRandom);
  console.log(`\nQuestion: ${randomNumber1} ${randomNumber2}`);
  const answer = readlineSync.question('\nYour answer: ');
  const correctAnswer = returnGcd(randomNumber1, randomNumber2);
  if (answer !== correctAnswer) {
    return wrongAnswer(answer, correctAnswer, name);
  }
  console.log('Correct!\n');

  return game(count + 1);
};

game(0);
