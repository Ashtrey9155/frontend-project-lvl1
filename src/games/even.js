import random from '../random';
import game from '../engine';

const min = 1;
const max = 50;
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);

export default () => {
  const getConditions = () => {
    const question = random(min, max);
    const answer = (isEven(question)) ? 'yes' : 'no';
    return [question, answer];
  };

  game(gameDescription, getConditions);
};
