#!/usr/bin/env node

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b).toString();
};

export default gcd;
