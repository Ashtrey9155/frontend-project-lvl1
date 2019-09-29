import random from '../random';
import play from '../engine';

const lengthOfProgression = 10;
const min = 0;
const gameDescription = 'What number is missing in the progression?';

const getProgression = (first, length, diff) => {
  const iter = (acc, i) => {
    if (length === i) {
      return acc;
    }
    acc.push(first + diff * i);
    return iter(acc, i + 1);
  };

  const result = iter([], 0);
  return result;
};

const getQuestion = (progression, hiddenElementIndex) => {
  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    question = (hiddenElementIndex === i) ? `${question} ..` : `${question} ${progression[i]}`;
  }
  return question.trim();
};

const getGameRoundInfo = () => {
  const hiddenElementIndex = random(min, lengthOfProgression - 1);
  const firstElement = random(0, 50);
  const diff = random(0, 20);
  const progression = getProgression(firstElement, lengthOfProgression, diff);
  const question = getQuestion(progression, hiddenElementIndex);
  const correctAnswer = `${progression[hiddenElementIndex]}`;
  return [question, correctAnswer];
};

export default () => {
  play(gameDescription, getGameRoundInfo);
};
