#!/usr/bin/env node
import random from '../../random';
import { hello, getName, game } from './engine/engine';

const lengthOfProgression = 10;
const maxCountToRandom = 10;

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


const getNewProgressionArray = (randomNumber = random(maxCountToRandom)) => {
  const result = [];
  const newProgress = getProgression();
  const CharProgress = convertProgressToChar(newProgress, randomNumber);
  result.push(CharProgress, `${newProgress[randomNumber - 1]}`);
  return result;
};


hello();
console.log('What number is missing in the progression?\n');
const name = getName();

game(name, getNewProgressionArray);
