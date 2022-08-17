/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
const plusOne = (digits) => {
  const result = String(BigInt(digits.join('')) + 1n).split('');
  for (let i = 0; i < digits.length; i += 1) {
    result[i] = Number(result[i]);
  }
  return result;
};

const test = (data, result) => {
  let res = true;
  const dataPlusOne = plusOne(data);
  let i = 0;
  while (dataPlusOne[i] && res) {
    if (dataPlusOne[i] !== result[i]) res = false;
    i += 1;
  }
  console.log(res);
};

test([1, 2, 3], [1, 2, 4]);
test([4, 3, 2, 1], [4, 3, 2, 2]);
test([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3], [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
