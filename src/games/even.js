import random from './random';
import game from './engine';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export default () => {
  const maxCountToRandom = 50;

  const getResultEven = () => {
    const question = random(maxCountToRandom);
    const result = [question];
    let answer = '';
    if (isEven(question)) {
      answer = 'yes';
      result.push(answer);
      return result;
    }
    answer = 'no';
    result.push(answer);
    return result;
  };

  const ruleGame = 'Answer "yes" if number is even otherwise answer "no".';

  game(ruleGame, getResultEven);
};
