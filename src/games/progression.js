import random from '../random';
import game from '../engine';

const lengthOfProgression = 10;
const min = 0;
const max = 9;
const gameDescription = 'What number is missing in the progression?';

const getProgression = (first, length, diff) => {
  const iter = (progression, i) => {
    if (length === i) {
      return progression;
    }
    progression.push(first + diff * i);
    return iter(progression, i + 1);
  };

  const result = iter([], 0, length - 1);
  return result;
};

const getQuestions = (progression, num) => {
  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    question = (num === i) ? `${question} ..` : `${question} ${progression[i]}`;
  }
  return question.trim();
};

const getGameRoundInfo = () => {
  const hiddenElement = random(min, max);
  const firstElement = random(0, 50);
  const diff = random(0, 20);
  const progression = getProgression(firstElement, lengthOfProgression, diff);
  const question = getQuestions(progression, hiddenElement);
  const correctAnswer = `${progression[hiddenElement]}`;
  return [question, correctAnswer];
};

export default () => {
  game(gameDescription, getGameRoundInfo);
};
