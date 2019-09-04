#!/usr/bin/env node
import random from '../../random';
import { hello, getName, game } from './engine/engine';

const maxCountToRandom = 50;

const returnGcd = (a = random(maxCountToRandom), b = random(maxCountToRandom)) => {
  const result = [`${a} ${b}`];
  const iter = (number1, number2) => {
    if (!number2) {
      result.push(`${number1}`);
      return result;
    }
    return iter(number2, number1 % number2);
  };
  return iter(a, b);
};

hello();
console.log('Find the greatest common divisor of given numbers.\n');
const name = getName();

game(name, returnGcd);
