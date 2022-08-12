/* eslint-disable no-param-reassign */
const removeDuplicates = (nums) => {
  let j = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== nums[i + 1]) {
      nums[j] = nums[i];
      j += 1;
    }
  }
  nums = nums.slice(0, j);
  console.log('nums: ', nums);
  return nums.length;
};

const test = removeDuplicates([1, 1, 2]) === 2
          && removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]) === 5;
console.log('test: ', test);

/*
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5
*/
