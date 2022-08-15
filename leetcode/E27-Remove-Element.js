/* eslint-disable no-param-reassign */
const removeElement = (nums, val) => {
  let valIndex = nums.indexOf(val);
  let last = nums.length - 1;
  while (valIndex !== -1) {
    nums[valIndex] = nums[last];
    nums[last] = '_';
    last -= 1;
    valIndex = nums.indexOf(val);
  }
  console.log('nums: ', nums.slice(0, last + 1));
  return (last + 1);
};

const test = removeElement([3, 2, 2, 3], 3) === 2
          && removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2) === 5;
console.log('test: ', test);
