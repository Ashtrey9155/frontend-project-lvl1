import random from '../random';
import game from '../engine';

const lengthOfProgression = 10;
const min = 0;
const max = 9;
const gameDescription = 'What number is missing in the progression?';

const getProgression = (first, length, step) => {
  const iter = (progression, i, lengthOff) => {
    if (lengthOff === 0) {
      return progression;
    }
    progression.push(progression[i] + step);
    return iter(progression, i + 1, lengthOff - 1);
  };

  const result = iter([first], 0, length - 1);
  return result;
};

const getQuestions = (progress, num) => {
  let result = '';
  for (let i = 0; i < progress.length; i += 1) {
    if (num === i) {
      result += '.. ';
    } else {
      result += `${progress[i]} `;
    }
  }
  return result;
};

export default () => {
  const getConditions = () => {
    const position = random(min, max);
    const firstElement = random(0, 50);
    const step = random(0, 20);
    const progression = getProgression(firstElement, lengthOfProgression, step);
    const question = getQuestions(progression, position);
    const answer = `${progression[position]}`;
    return [question, answer];
  };

  game(gameDescription, getConditions);
};
