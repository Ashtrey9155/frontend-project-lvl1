#!/usr/bin/env node
import readlineSync from 'readline-sync';
import index from '../index';
import random from '../random';
import hello from '../hello';
import title from '../titleBrainProgression';
import checkAnswer from '../chekAnswerProgression';
import wrongAnswer from '../incorrectAnswer';

const maxCountToRandom = 10;
hello();
title();
const name = index();
console.log(`Hello, ${name}`);

const game = (count) => {
  if (count === 3) {
    return console.log(`Congratulations, ${name}`);
  }
  const randomNumber = random(maxCountToRandom);
  // const correctAnswerChar = checkAnswer(randomNumber, 1);
  const correctAnswer = checkAnswer(randomNumber);
  console.log(`\nQuestion: ${correctAnswer[1]}`);
  const answer = readlineSync.question('\nYour answer: ');
  if (answer !== correctAnswer[0].toString()) {
    return wrongAnswer(answer, correctAnswer[0], name);
  }
  console.log('Correct!\n');

  return game(count + 1);
};

game(0);
