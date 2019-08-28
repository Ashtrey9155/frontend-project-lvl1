#!/usr/bin/env node
import readlineSync from 'readline-sync';
import index from '../index';
import random from '../random';
import hello from '../hello';
import title from '../titleBrainGcd';
import checkAnswer from '../checkAnswerGcd';
import wrongAnswer from '../incorrectAnswer';

hello();
title();
const name = index();
console.log(`Hello, ${name}`);

const game = (count) => {
  if (count === 3) {
    return console.log(`Congratulations, ${name}`);
  }
  const randomNumber1 = random();
  const randomNumber2 = random();
  console.log(`\nQuestion: ${randomNumber1} ${randomNumber2}`);
  const answer = readlineSync.question('\nYour answer: ');
  const correctAnswer = checkAnswer(randomNumber1, randomNumber2);
  if (answer !== correctAnswer) {
    return wrongAnswer(answer, correctAnswer, name);
  }
  console.log('Correct!\n');

  return game(count + 1);
};

game(0);