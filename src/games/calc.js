import random from '../random';
import game from '../engine';

const gameDescription = 'What is the result of the expression?';
const min = 0;
const max = 50;
const mathSigns = ['+', '-', '*'];
const maxCountOfSymbols = mathSigns.length;

export default () => {
  const getResultExpression = () => {
    const number1 = random(min, max);
    const number2 = random(min, max);
    const symbol = mathSigns[random(min, maxCountOfSymbols - 1)];
    const question = `${number1} ${symbol} ${number2}`;
    let answer = '';
    switch (symbol) {
      case '+':
        answer = (number1 + number2).toString();
        break;
      case '-':
        answer = (number1 - number2).toString();
        break;
      case '*':
        answer = (number1 * number2).toString();
        break;
      default:
        answer = '';
    }
    return [question, answer];
  };

  game(gameDescription, getResultExpression);
};
