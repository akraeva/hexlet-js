// дано
const reverse = (string) => (string.split('').reverse().join(''));

const isPalindrome = (text) => {
  const str = text.toLowerCase();
  return str === reverse(str);
};
const isNotPalindrome = (str) => !isPalindrome(str);

let res1 = isPalindrome('шалаш') === true;
let res2 = isPalindrome('ага') === true;
let res3 = isPalindrome('хекслет') === false;
let res4 = isPalindrome('Ага') === true;

console.log(res1, res2, res3, res4);

res1 = isNotPalindrome('шалаш') === false;
res2 = isNotPalindrome('ага') === false;
res3 = isNotPalindrome('хекслет') === true;

console.log(res1, res2, res3);
