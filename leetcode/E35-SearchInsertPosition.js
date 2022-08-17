const searchInsert = (nums, target) => {
  let i = 0;
  while (nums[i] < target) i += 1;
  return i;
};

const test = searchInsert([1, 3, 5, 6], 5) === 2
          && searchInsert([1, 3, 5, 6], 2) === 1
          && searchInsert([1, 3, 5, 6], 7) === 4;

console.log('test: ', test);
