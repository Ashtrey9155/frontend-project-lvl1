import random from './random';
import game from './engine';
import nod from './nod';

export default () => {
  const maxCountToRandom = 50;

  const returnGcd = (a = random(maxCountToRandom), b = random(maxCountToRandom)) => {
    const result = [`${a} ${b}`];
    result.push(`${nod(a, b)}`);
    return result;
  };

  const ruleGame = 'Find the greatest common divisor of given numbers.\n';

  game(ruleGame, returnGcd);
};
