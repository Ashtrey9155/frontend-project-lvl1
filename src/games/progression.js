import random from './random';
import game from './engine';

const lengthOfProgression = 10;

const getProgression = (first, length, step) => {
  const iter = (progression, count) => {
    if (length === count + 1) {
      return progression;
    }
    progression.push(progression[count] + step);
    return iter(progression, count + 1);
  };

  const result = iter(first, 0);
  return result;
};

export default () => {
  const maxCountToRandom = 10;

  const getQuestions = (progress, changeNum) => {
    let result = '';
    for (let i = 0; i < lengthOfProgression; i += 1) {
      if (changeNum - 1 === i) {
        result += ' .. ';
      } else {
        result += ` ${progress[i]} `;
      }
    }
    return result;
  };


  const getAnswer = (randomNumber = random(maxCountToRandom)) => {
    const result = [];
    const newProgress = getProgression(random(50), lengthOfProgression, random(10));
    const questions = getQuestions(newProgress, randomNumber);
    result.push(questions, `${newProgress[randomNumber - 1]}`);
    return result;
  };

  const ruleGame = 'What number is missing in the progression?';

  game(ruleGame, getAnswer);
};
