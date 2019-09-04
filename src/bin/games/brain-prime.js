#!/usr/bin/env node
import random from '../../random';
import { hello, getName, game } from './engine/engine';

const maxCountToRandom = 100;

const isPrime = (number = random(maxCountToRandom)) => {
  const result = [`${number}`];
  if (number < 2) {
    result.push('no');
    return result;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result.push('no');
      return result;
    }
  }
  result.push('yes');
  return result;
};

hello();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
const name = getName();

game(name, isPrime);
