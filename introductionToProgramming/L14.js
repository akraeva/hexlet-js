import assert from 'assert';

const factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

try {
  assert.equal(factorial(0), 1);
  assert.equal(factorial(1), 2);
  assert.equal(factorial(5), 120);
  assert.equal(factorial(10), 3628800);
  console.log('it works! :)');
} catch (error) {
  console.log(`Something went wrong :( \n${error}\n`);
}
