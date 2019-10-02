import random from '../random';
import play from '../engine';

const min = 1;
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
  const answer = getGcd(a, b).toString();
  return [question, answer];
};

export default () => {
  play(gameDescription, getGameRoundInfo);
};
