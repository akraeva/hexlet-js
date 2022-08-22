/* eslint-disable no-param-reassign */
const merge = (nums1, m, nums2, n) => {
  for (let i = (m + n) - 1; i >= 0; i -= 1) {
    if ((n === 0 && m !== 0) || nums1[m - 1] > nums2[n - 1]) {
      nums1[i] = nums1[m - 1];
      m -= 1;
    } else {
      nums1[i] = nums2[n - 1];
      n -= 1;
    }
  }
  return nums1; // не нужен в ответе
};

const test = () => {
  let input;
  let output;
  const check = () => input.every((itemA, indexA) => itemA === output[indexA]);

  input = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
  output = [1, 2, 2, 3, 5, 6];
  if (!check()) return false;

  input = merge([1], 1, [], 0);
  output = [1];
  if (!check()) return false;

  input = merge([0], 0, [1], 1);
  output = [1];
  if (!check()) return false;

  return true;
};

console.log('test: ', test());
