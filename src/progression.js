import random from './random';
import game from './engine';

export default () => {
  const lengthOfProgression = 10;
  const maxCountToRandom = 10;

  const getProgression = () => {
    const step = random(10);

    const iter = (progression, count) => {
      if (lengthOfProgression === count + 1) {
        return progression;
      }
      progression.push(progression[count] + step);
      return iter(progression, count + 1);
    };

    const result = iter([random(50)], 0);
    return result;
  };

  const progressToStr = (progress, changeNum) => {
    let charProgress = '';
    for (let i = 0; i < lengthOfProgression; i += 1) {
      if (changeNum - 1 === i) {
        charProgress += ' .. ';
      } else {
        charProgress += ` ${progress[i]} `;
      }
    }
    return charProgress;
  };


  const getNewProgressionArray = (randomNumber = random(maxCountToRandom)) => {
    const result = [];
    const newProgress = getProgression();
    const CharProgress = progressToStr(newProgress, randomNumber);
    result.push(CharProgress, `${newProgress[randomNumber - 1]}`);
    return result;
  };

  const ruleGame = 'What number is missing in the progression?\n';

  game(ruleGame, getNewProgressionArray);
};
