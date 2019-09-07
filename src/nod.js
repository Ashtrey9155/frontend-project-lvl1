export default (number1, number2) => {
  const iter = (a, b) => {
    if (!b) {
      return a;
    }
    return iter(b, a % b);
  };
  return iter(number1, number2);
};
