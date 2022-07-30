const smallestDivisor = (num) => {
  if (num < 1) {
    return NaN;
  }
  if (num === 1) {
    return 1;
  }
  let divisor = 2;
  while (num % divisor !== 0) {
    divisor += 1;
  }
  return divisor;
};

const test = smallestDivisor(1) === 1
          && smallestDivisor(4) === 2
          && smallestDivisor(121) === 11
          && smallestDivisor(3) === 3
          && smallestDivisor(8) === 2
          && smallestDivisor(9) === 3
          && smallestDivisor(17) === 17
          && smallestDivisor(15) === 3;
console.log(test);
console.log(smallestDivisor(-3), smallestDivisor(0));
