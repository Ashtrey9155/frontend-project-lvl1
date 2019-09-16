import random from './random';
import game from './engine';

const lengthOfProgression = 10;
const maxCountToRandom = 10;
const gameDescription = 'What number is missing in the progression?';

const getProgression = (first, length, step) => {
  const iter = (progression, count) => {
    if (length === count + 1) {
      return progression;
    }
    progression.push(progression[count] + step);
    return iter(progression, count + 1);
  };

  const result = iter([first], 0);
  return result;
};

export default () => {
  const getQuestions = (progress, num) => {
    let result = '';
    for (let i = 0; i < lengthOfProgression; i += 1) {
      if (num - 1 === i) {
        result = `${result} ..`;
      } else {
        result = `${result} ${progress[i]}`;
      }
    }
    return result;
  };

  const getAnswer = (randomNumber = random(maxCountToRandom)) => {
    const result = [];
    const number = random(50);
    const step = random(20);
    const newProgress = getProgression(number, lengthOfProgression, step);
    const questions = getQuestions(newProgress, randomNumber);
    result.push(questions, `${newProgress[randomNumber - 1]}`);
    return result;
  };

  game(gameDescription, getAnswer);
};
