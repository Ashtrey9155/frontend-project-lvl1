#!/usr/bin/env node
import readlineSync from 'readline-sync';
import index from '../index';
import random from '../random';
import checkAnswer from '../checkAnswer';

console.log('\nWelcome to the Brain Games! \nAnswer "yes" if number even otherwise answer "no".\n');

const name = index();
let count = 0;
console.log(`Hello, ${name}`);

// number = random();
// console.log('\nQuestion: ' + number);

// let answer = readlineSync.question('\nYour answer: ');

// console.log('\nAnsver: ' + answer);

const game = () => {
  if (count === 3) {
    // console.log('Correct!\n');
    return console.log(`Congratulations, ${name}`);
  }
  const randomNumber = random();
  console.log(`\nQuestion: ${randomNumber}`);
  const answer = readlineSync.question('\nYour answer: ');
  const correctAnswer = checkAnswer(randomNumber);
  if (answer === correctAnswer) {
    console.log('Correct!\n');
    count += 1;
    game();
  } else {
    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, Bill!`);
  }
};

game();