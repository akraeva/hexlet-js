const sumSquareDifference = (count) => {
  let sumOfSquares = 0;
  let squareOfSum = 0;

  for (let i = 1; i <= count; i += 1) {
    sumOfSquares += i ** 2;
    squareOfSum += i;
  }
  squareOfSum **= 2;

  return squareOfSum - sumOfSquares;
};

const test = sumSquareDifference(10) === 2640;
console.log('test: ', test);
