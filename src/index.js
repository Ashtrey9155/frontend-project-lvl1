#!/usr/bin/env node
import readlineSync from 'readline-sync';

const actual = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export default actual;
