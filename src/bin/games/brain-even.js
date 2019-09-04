#!/usr/bin/env node
import random from '../../random';
import { hello, getName, game } from './engine/engine';

const maxCountToRandom = 50;

const isEven = () => {
  const number = random(maxCountToRandom);
  const result = [number];
  if (number % 2 === 0) {
    result.push('yes');
    return result;
  }
  result.push('no');
  return result;
};

hello();
console.log('Answer "yes" if number even otherwise answer "no".\n');
const name = getName();

game(name, isEven);
