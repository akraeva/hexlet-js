/* eslint-disable consistent-return */
const singleNumber = (nums) => {
  const arr = nums.sort();
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] !== arr[i + 1]) return arr[i];
  }
  return arr[arr.length - 1];
};

const test = singleNumber([2, 2, 1]) === 1
          && singleNumber([4, 1, 2, 1, 2]) === 4
          && singleNumber([1]) === 1
          && singleNumber([1, 0, 1]) === 0;
console.log('test: ', test);
