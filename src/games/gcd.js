import random from '../random';
import game from '../engine';

const min = 0;
const max = 50;
const gameDescription = 'Find the greatest common divisor of given numbers.';
const getGcd = (number1, number2) => {
  const iter = (a, b) => {
    if (!b) {
      return a;
    }
    return iter(b, a % b);
  };
  return iter(number1, number2);
};

const getGameRoundInfo = () => {
  const a = random(min, max);
  const b = random(min, max);
  const question = `${a} ${b}`;
  const answer = `${getGcd(a, b)}`;
  return [question, answer];
};

export default () => {
  game(gameDescription, getGameRoundInfo);
};
