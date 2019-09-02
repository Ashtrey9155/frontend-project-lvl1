#!/usr/bin/env node
import readlineSync from 'readline-sync';
import index from '../index';
import random from '../random';
import hello from '../hello';
import wrongAnswer from '../incorrectAnswer';

const maxCountOfSymbols = 3;
const getRandomSymbol = () => {
  const idSymbol = Math.floor(Math.random() * maxCountOfSymbols) + 1;
  switch (idSymbol) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '/';
  }
};

const getResult = (number1, number2, symbol) => {
  switch (symbol) {
    case '+':
      return (number1 + number2).toString();
    case '-':
      return (number1 - number2).toString();
    case '*':
      return (number1 * number2).toString();
    default:
      return (number1 / number2).toString();
  }
};

const maxCount = 50;
hello();
console.log('What is the result of the expression?\n');
const name = index();
console.log(`Hello, ${name}`);

const game = (count) => {
  if (count === 3) {
    return console.log(`Congratulations, ${name}`);
  }
  const randomNumber1 = random(maxCount);
  const randomNumber2 = random(maxCount);
  const randomSymbol = getRandomSymbol();
  console.log(`\nQuestion: ${randomNumber1} ${randomSymbol} ${randomNumber2}`);
  const answer = readlineSync.question('\nYour answer: ');
  const correctAnswer = getResult(randomNumber1, randomNumber2, randomSymbol);
  if (answer !== correctAnswer) {
    return wrongAnswer(answer, correctAnswer, name);
  }
  console.log('Correct!\n');

  return game(count + 1);
};

game(0);
