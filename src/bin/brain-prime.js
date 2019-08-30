#!/usr/bin/env node
import readlineSync from 'readline-sync';
import index from '../index';
import random from '../random';
import hello from '../hello';
import title from '../titleBrainPrime';
import checkAnswer from '../checkAnswerPrime';
import wrongAnswer from '../incorrectAnswer';

const maxCountToRandom = 100;
hello();
title();
const name = index();
console.log(`Hello, ${name}`);

const game = (count) => {
  if (count === 3) {
    return console.log(`Congratulations, ${name}`);
  }
  const randomNumber = random(maxCountToRandom);
  const correctAnswer = checkAnswer(randomNumber);
  console.log(`\nQuestion: ${randomNumber}`);
  const answer = readlineSync.question('\nYour answer: ');
  if (answer !== correctAnswer.toString()) {
    return wrongAnswer(answer, correctAnswer, name);
  }
  console.log('Correct!\n');

  return game(count + 1);
};

game(0);
