#!/usr/bin/env node
import random from '../../random';
import { hello, getName, game } from './engine/engine';

const maxCountOfSymbols = 3;
const maxCountRandom = 50;

const getRandomSymbol = () => {
  const idSymbol = random(maxCountOfSymbols);
  switch (idSymbol) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '/';
  }
};

const getResultExpression = () => {
  const number1 = random(maxCountRandom);
  const number2 = random(maxCountRandom);
  const symbol = getRandomSymbol();
  const result = [];
  result.push(`${number1} ${symbol} ${number2}`);
  switch (symbol) {
    case '+':
      result.push((number1 + number2).toString());
      return result;
    case '-':
      result.push((number1 - number2).toString());
      return result;
    case '*':
      result.push((number1 * number2).toString());
      return result;
    default:
      result.push((number1 / number2).toString());
      return result;
  }
};

hello();
console.log('What is the result of the expression?\n');
const name = getName();

game(name, getResultExpression);
