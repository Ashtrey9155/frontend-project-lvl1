import random from './random';
import game from './engine';

export default () => {
  const maxCountToRandom = 50;
  const isEven = (number) => {
    if (number % 2 === 0) {
      return true;
    }
    return false;
  };

  const getResultEven = () => {
    const num = random(maxCountToRandom);
    const result = [num];
    if (isEven(num)) {
      result.push('yes');
      return result;
    }
    result.push('no');
    return result;
  };

  const ruleGame = 'Answer "yes" if number even otherwise answer "no".\n';

  game(ruleGame, getResultEven);
};
