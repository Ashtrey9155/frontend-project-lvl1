import random from './random';
import game from './engine';

export default () => {
  const maxCountOfSymbols = 3;
  const maxCountRandom = 50;
  const listSymbols = ['', '+', '-', '*'];

  const getResultExpression = () => {
    const number1 = random(maxCountRandom);
    const number2 = random(maxCountRandom);
    const symbol = listSymbols[random(maxCountOfSymbols)];
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

  const ruleGame = 'What is the result of the expression?';

  game(ruleGame, getResultExpression);
};
