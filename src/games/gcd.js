import random from '../random';
import game from '../engine';

const min = 0;
const max = 50;
const gameDescription = 'Find the greatest common divisor of given numbers.';
const gcd = (number1, number2) => {
  const iter = (a, b) => {
    if (!b) {
      return a;
    }
    return iter(b, a % b);
  };
  return iter(number1, number2);
};

export default () => {
  const getConditions = (a = random(min, max), b = random(min, max)) => {
    const question = [`${a} ${b}`];
    const answer = (`${gcd(a, b)}`);
    return [question, answer];
  };

  game(gameDescription, getConditions);
};
