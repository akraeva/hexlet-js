import assert from 'assert';

const sumOfDigits = (num) => {
  const digits = String(num);
  let acc = 0;
  for (let i = 0; i < digits.length; i += 1) {
    acc += Number(digits[i]);
  }
  return acc;
};

const addDigits = (num) => {
  let result = num;
  while (result >= 10) {
    result = sumOfDigits(result);
  }
  return result;
};

export default addDigits;

// tests
try {
  assert.equal(addDigits(10), 1);
  assert.equal(addDigits(19), 1);
  assert.equal(addDigits(38), 2);
  assert.equal(addDigits(1259), 8);
  console.log('\nit works! :)');
} catch (error) {
  console.log(`Something went wrong :( \n${error}\n`);
}
