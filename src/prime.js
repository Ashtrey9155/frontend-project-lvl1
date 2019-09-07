import random from './random';
import game from './engine';

export default () => {
  const maxCountToRandom = 100;

  const isPrime = (number = random(maxCountToRandom)) => {
    const result = [`${number}`];
    if (number < 2) {
      result.push('no');
      return result;
    }

    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        result.push('no');
        return result;
      }
    }
    result.push('yes');
    return result;
  };

  const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

  game(ruleGame, isPrime);
};
