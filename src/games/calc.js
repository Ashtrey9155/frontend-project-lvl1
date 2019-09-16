import random from './random';
import game from './engine';

const gameDescription = 'What is the result of the expression?';
const minCountRandom = 0;
const maxCountRandom = 50;
const listSymbols = ['+', '-', '*'];
const maxCountOfSymbols = listSymbols.length;

export default () => {
  const getResultExpression = () => {
    const number1 = random(minCountRandom, maxCountRandom);
    const number2 = random(minCountRandom, maxCountRandom);
    const symbol = listSymbols[random(minCountRandom, maxCountOfSymbols - 1)];
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
        return '';
    }
  };

  game(gameDescription, getResultExpression);
};
