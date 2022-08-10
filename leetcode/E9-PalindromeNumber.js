/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => String(x) === String(x).split('').reverse().join('');

//   if (x < 0) return false; <-- чуть дольше работает, но занимает чуть меньше памяти

const test = isPalindrome(121);
console.log('test: ', test);
