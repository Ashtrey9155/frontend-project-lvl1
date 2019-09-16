import random from './random';
import game from './engine';

const maxCountToRandom = 50;
const gameDescription = 'Find the greatest common divisor of given numbers.';
const getLargestFactor = (number1, number2) => {
  const iter = (a, b) => {
    if (!b) {
      return a;
    }
    return iter(b, a % b);
  };
  return iter(number1, number2);
};

export default () => {
  const returnGcd = (a = random(maxCountToRandom), b = random(maxCountToRandom)) => {
    const result = [`${a} ${b}`];
    result.push(`${getLargestFactor(a, b)}`);
    return result;
  };

  game(gameDescription, returnGcd);
};
