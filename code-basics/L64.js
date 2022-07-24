const multiplyNumbersFromRange = (start, finish) => {
  let result = 1;
  let i = start;
  while (i <= finish) {
    result *= i;
    i += 1;
  }
  return result;
};

const test = multiplyNumbersFromRange(1, 5) === 120
            && multiplyNumbersFromRange(2, 3) === 6
            && multiplyNumbersFromRange(6, 6) === 6;
console.log(test);
