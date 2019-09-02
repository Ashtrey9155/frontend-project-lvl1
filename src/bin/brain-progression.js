#!/usr/bin/env node
import readlineSync from 'readline-sync';
import index from '../index';
import random from '../random';
import wrongAnswer from '../incorrectAnswer';
import hello from '../hello';

const lengthOfProgression = 10;
const getProgression = () => {
  const firstElemArrey = random(50);
  const stepElemArray = random(10);
  const array = [firstElemArrey];

  const genArreyProgression = (arrayMass, countAdd) => {
    if (lengthOfProgression === countAdd + 1) {
      return arrayMass;
    }
    arrayMass.push(arrayMass[countAdd] + stepElemArray);
    return genArreyProgression(arrayMass, countAdd + 1);
  };

  const mass = genArreyProgression(array, 0);
  return mass;
};

const convertProgressToChar = (progress, changeNum) => {
  let charProgress = '';
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (changeNum - 1 === i) {
      charProgress += ' .. ';
    } else {
      charProgress += ` ${progress[i]} `;
    }
  }
  return charProgress;
};


const getNewProgressionArray = (randomNumber) => {
  const res = [];
  const newProgress = getProgression();
  const CharProgress = convertProgressToChar(newProgress, randomNumber);
  res.push(newProgress[randomNumber - 1], CharProgress);
  return res;
};

const maxCountToRandom = 10;
hello();
console.log('What number is missing in the progression?\n');
const name = index();
console.log(`Hello, ${name}`);

const game = (count) => {
  if (count === 3) {
    return console.log(`Congratulations, ${name}`);
  }
  const randomNumber = random(maxCountToRandom);
  const correctAnswer = getNewProgressionArray(randomNumber);
  console.log(`\nQuestion: ${correctAnswer[1]}`);
  const answer = readlineSync.question('\nYour answer: ');
  if (answer !== correctAnswer[0].toString()) {
    return wrongAnswer(answer, correctAnswer[0], name);
  }
  console.log('Correct!\n');

  return game(count + 1);
};

game(0);
