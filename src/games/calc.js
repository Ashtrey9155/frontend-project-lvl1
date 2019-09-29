import random from '../random';
import play from '../engine';

const gameDescription = 'What is the result of the expression?';
const min = 0;
const max = 50;
const mathSigns = ['+', '-', '*'];

const getGameRoundData = () => {
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
      break;
  }
  return [question, answer.toString()];
};

export default () => {
  play(gameDescription, getGameRoundData);
};
