import readlineSync from 'readline-sync';

const round = 3;

export default (ruleGame, getQuestions) => {
  console.log('\nWelcome to the Brain Games!\n');
  console.log(`${ruleGame}\n`);
  const name = readlineSync.question('May I have your name? ');
  const iter = (countRound) => {
    if (countRound === round) {
      console.log(`Congratulations, ${name}!`);
      return '';
    }
    const question = getQuestions();
    console.log(`\nQuestion: ${question[0]}`);
    const answer = readlineSync.question('\nYour answer: ');
    if (answer !== question[1]) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question[1]}'. \nLet's try again, ${name}!`);
      return '';
    }

    console.log('Correct!\n');
    return iter(countRound + 1);
  };
  iter(0);
};
