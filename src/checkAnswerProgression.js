#!/usr/bin/env node
import random from './random';

const lengthOfProgression = 10;
const progression = () => {
  const firstElemArrey = random(50);
  const stepElemArray = random(10);
  const array = [firstElemArrey];

  const genArreyProgression = (arrayMass, lengthOff) => {
    if (lengthOfProgression === lengthOff + 1) {
      return arrayMass;
    }
    arrayMass.push(arrayMass[lengthOff] + stepElemArray);
    return genArreyProgression(arrayMass, lengthOff + 1);
  };

  const mass = genArreyProgression(array, 0);
  return mass;
};

const convertToChar = (progress, iNum) => {
  let string = '';
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (iNum - 1 === i) {
      string += ' .. ';
    } else {
      string += ` ${progress[i]} `;
    }
  }
  return string;
};


const def = (randomNumber) => {
  const res = [];
  const arrRes = progression();
  const getCharArrey = convertToChar(arrRes, randomNumber);
  res.push(arrRes[randomNumber - 1], getCharArrey);
  return res;
};

export default def;
