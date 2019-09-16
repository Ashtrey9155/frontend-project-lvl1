import random from './random';
import game from './engine';

const maxCountToRandom = 50;
const gameDescription = 'Answer "yes" if number is even otherwise answer "no".';
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export default () => {
  const getResultEven = () => {
    const question = random(maxCountToRandom);
    let answer = '';
    if (isEven(question)) {
      answer = 'yes';
    } else {
      answer = 'no';
    }
    const result = [question, answer];
    return result;
  };

  game(gameDescription, getResultEven);
};
