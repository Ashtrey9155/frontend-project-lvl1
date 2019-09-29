import random from '../random';
import play from '../engine';

const min = 0;
const max = 100;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < Math.floor(n / 2); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameRoundInfo = () => {
  const question = random(min, max);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  play(gameDescription, getGameRoundInfo);
};
