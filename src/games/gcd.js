import random from './random';
import game from './engine';

const getSmallFactor = (number1, number2) => {
  const iter = (a, b) => {
    if (!b) {
      return a;
    }
    return iter(b, a % b);
  };
  return iter(number1, number2);
};

export default () => {
  const maxCountToRandom = 50;

  const returnGcd = (a = random(maxCountToRandom), b = random(maxCountToRandom)) => {
    const result = [`${a} ${b}`];
    result.push(`${getSmallFactor(a, b)}`);
    return result;
  };

  const ruleGame = 'Find the greatest common divisor of given numbers.';

  game(ruleGame, returnGcd);
};
