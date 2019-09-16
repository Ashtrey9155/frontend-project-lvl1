import random from './random';
import game from './engine';

const maxCountToRandom = 100;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  const answer = () => {
    const number = random(maxCountToRandom);
    const result = isPrime(number) ? [`${number}`, 'yes'] : [`${number}`, 'no'];
    return result;
  };
  game(gameDescription, answer);
};
