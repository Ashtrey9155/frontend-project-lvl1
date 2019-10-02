import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (ruleGame, getGameRoundData) => {
  console.log('\nWelcome to the Brain Games!\n');
  console.log(`${ruleGame}\n`);
  const name = readlineSync.question('May I have your name? ');
  const iter = (counterRound) => {
    if (counterRound === roundsCount) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const [question, correctAnswer] = getGameRoundData();
    console.log(`\nQuestion: ${question}`);
    const userAnswer = readlineSync.question('\nYour answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(.`);
      console.log(`Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
      return;
    }

    console.log('Correct!\n');
    iter(counterRound + 1);
  };
  iter(0);
};
