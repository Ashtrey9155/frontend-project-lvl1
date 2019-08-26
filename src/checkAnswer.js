#!/usr/bin/env node

const checkAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default checkAnswer;
