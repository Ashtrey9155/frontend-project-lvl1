#!/usr/bin/env node
const maxCountToRandom = 3;
const func = () => {
  const idSymbol = Math.floor(Math.random() * maxCountToRandom) + 1;
  switch (idSymbol) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '/';
  }
};

export default func;
