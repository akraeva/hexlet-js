// import assert from 'assert';
/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  if (strs.some((str) => !str)) return '';

  const subStr = (str1, str2) => {
    if (str1 === str2) return str1;

    let i = 0;
    while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
      i += 1;
    }
    console.log('prefix', str1.slice(0, i));
    return str1.slice(0, i);
  };

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i += 1) {
    prefix = subStr(prefix, strs[i]);
  }
  return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

// ищет самую длинную под строку в массиве строк, а надо - префикс :(
/*
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  if (strs.every((str) => !str)) return '';

  const subStr = (str1, str2) => {
    if (str1 === str2) return str1;
    if (!str1.split('').some((x) => str2.split('').includes(x))) return '';

    const first = str1.length >= str2.length ? str1 : str2;
    const second = str1.length >= str2.length ? str2 : str1;

    let result = '';
    for (let i = 0; i < second.length; i += 1) {
      for (let j = second.length; j > i; j -= 1) {
        const secondSlice = second.slice(i, j);
        if (first.indexOf(secondSlice) >= 0) result = `${result} ${secondSlice}`;
      }
    }
    return result;
  };

  let sameString = strs[0];
  for (let i = 1; i < strs.length; i += 1) {
    sameString = subStr(sameString, strs[i]);
  }
  const sameSrtArray = sameString.split(' ');
  const lengthArray = Array.from(sameSrtArray, (word) => word.length);
  const maxStrIndex = lengthArray.indexOf(Math.max(...lengthArray));
  return sameSrtArray[maxStrIndex];
};
*/
