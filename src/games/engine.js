import readlineSync from 'readline-sync';

export default (ruleGame, getQuestions) => {
  console.log('\nWelcome to the Brain Games!\n');
  console.log(`${ruleGame}\n`);
  const name = readlineSync.question('May I have your name? ');
  const iter = (countRound) => {
    if (countRound === 3) {
      // return console.log(`Congratulations, ${name}!`);
      return `Congratulations, ${name}!`;
    }
    const question = getQuestions();
    console.log(`\nQuestion: ${question[0]}`);
    const answer = readlineSync.question('\nYour answer: ');
    if (answer !== question[1]) {
      return `'${answer}' is wrong answer ;(. Correct answer was '${question[1]}'. \nLet's try again, ${name}!`;
    }

    console.log('Correct!\n');
    return iter(countRound + 1);
  };
  console.log(iter(0));
};
