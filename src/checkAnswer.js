#!/usr/bin/env node

const checkAnswer = (number) => {
  if (number % 2 === 0) {
    return 'Yes';
  }
  return 'No';
};

export default checkAnswer;
