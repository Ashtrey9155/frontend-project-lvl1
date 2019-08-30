#!/usr/bin/env node
import readlineSync from 'readline-sync';
import index from '../index';
import random from '../random';
import checkAnswer from '../checkAnswer';
import hello from '../hello';
import title from '../titleBrainEven';
import wrongAnswer from '../incorrectAnswer';

const maxCountToRandom = 50;
hello();
title();
const name = index();
console.log(`Hello, ${name}`);

const game = (count) => {
  if (count === 3) {
    return console.log(`Congratulations, ${name}`);
  }
  const randomNumber = random(maxCountToRandom);
  console.log(`\nQuestion: ${randomNumber}`);
  const answer = readlineSync.question('\nYour answer: ');
  const correctAnswer = checkAnswer(randomNumber);
  if (answer !== correctAnswer) {
    return wrongAnswer(answer, correctAnswer, name);
  }
  console.log('Correct!\n');

  return game(count + 1);
};

game(0);
