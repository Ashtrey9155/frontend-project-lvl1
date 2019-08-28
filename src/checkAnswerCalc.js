#!/usr/bin/env node

const checkAnswer = (number1, number2, symbol) => {
  switch (symbol) {
    case '+':
      return (number1 + number2).toString();
    case '-':
      return (number1 - number2).toString();
    case '*':
      return (number1 * number2).toString();
    default:
      return (number1 / number2).toString();
  }
};

export default checkAnswer;
