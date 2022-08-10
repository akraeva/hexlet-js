/* eslint-disable consistent-return */
const twoSum = (nums, target) => {
// это решение быстрее
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // это решение очень медленное
/*
  let res = [];
  nums.forEach((item1, i) => {
    nums.forEach((item2, j) => {
      if (i !== j && item1 + item2 === target) {
        res = [i, j];
      }
    });
  });
  return res;
  */
};

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);
console.log(twoSum([0, 4, 3, 0], 0), [0, 3]);
