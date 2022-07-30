import assert from 'assert';

const square = (num) => num ** 2;

const sumOfSquares = (a, b) => square(a) + square(b);

const squareSumOfSquares = (num1, num2) => (sumOfSquares(num1, num2) ** 2);

try {
  assert.equal(square(5), 25);
  assert.equal(square(10), 100);
  assert.equal(sumOfSquares(5, 10), 125);
  assert.equal(sumOfSquares(10, -9), 181);
  assert.equal(squareSumOfSquares(1, 1), 4);
  assert.equal(squareSumOfSquares(2, 3), 169);
  console.log('it works! :)');
} catch (error) {
  console.log(`Something went wrong :( \n${error}\n`);
}
