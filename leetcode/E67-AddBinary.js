/* eslint-disable radix */
const addBinary = (a, b) => {
  let carry = false;
  let result = '';
  let indexA = a.length - 1;
  let indexB = b.length - 1;
  while (a[indexA] || b[indexB]) {
    let sum = carry ? 1 : 0;
    sum += a[indexA] ? parseInt(a[indexA]) : 0;
    sum += b[indexB] ? parseInt(b[indexB]) : 0;
    if (sum >= 2) {
      sum -= 2;
      carry = true;
    } else {
      carry = false;
    }
    result = `${sum}${result}`;
    indexA -= 1;
    indexB -= 1;
  }
  return carry ? `1${result}` : result;
};

const test = addBinary('11', '1') === '100'
         && addBinary('1010', '1011') === '10101';

console.log('test: ', test);
