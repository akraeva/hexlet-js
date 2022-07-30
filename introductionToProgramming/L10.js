const smallestDivisor = (num) => {
  if (num === 1) {
    return 1;
  }

  const iter = (divisor) => {
    if (num % divisor === 0) {
      return divisor;
    }
    return iter(divisor + 1);
  };

  return iter(2);
};

const test = smallestDivisor(15) === 3
          && smallestDivisor(17) === 17
          && smallestDivisor(1) === 1
          && smallestDivisor(3) === 3
          && smallestDivisor(4) === 2
          && smallestDivisor(8) === 2
          && smallestDivisor(9) === 3
          && smallestDivisor(17) === 17
          && smallestDivisor(15) === 3
          && smallestDivisor(121) === 11;
console.log(test);
