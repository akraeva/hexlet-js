import assert from 'assert';

// strings.js
const length = (str) => str.length;
const toUpperCase = (str) => str.toUpperCase();

// comparers.js

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let counter = 0;
  for (let i = 0; i < length(str); i += 1) {
    const char = str[i];
    if (char === toUpperCase(char)) {
      counter += 1;
    }
  }
  return counter;
  // END
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  }
  if (firstCount < secondCount) {
    return -1;
  }
  return 0;
  // END
};

const greaterThan = (first, second) => (
  compare(first, second) === 1);

const lessThan = (first, second) => (
  compare(first, second) === -1);

const isEqual = (first, second) => (
  compare(first, second) === 0);

// tests
try {
  assert.equal(greaterThan('AD', 'ad sd'), true);
  assert.equal(greaterThan('AD', '   Ad sd'), false);
  assert.equal(lessThan('ghe df', 'dfwe r D'), true);
  assert.equal(isEqual('liSp', 'lisP'), true);
  console.log('\nit works! :)');
} catch (error) {
  console.log(`Something went wrong :( \n${error}\n`);
}
