import random from '../random';
import game from '../engine';

const gameDescription = 'What is the result of the expression?';
const min = 0;
const max = 50;
const mathSigns = ['+', '-', '*'];

const getGameRoundInfo = () => {
  const number1 = random(min, max);
  const number2 = random(min, max);
  const sign = mathSigns[random(min, mathSigns.length - 1)];
  const question = `${number1} ${sign} ${number2}`;
  let answer = '';
  switch (sign) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      answer = '';
  }
  return [question, answer.toString()];
};

export default () => {
  game(gameDescription, getGameRoundInfo);
};
