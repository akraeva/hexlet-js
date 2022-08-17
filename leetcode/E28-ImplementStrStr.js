const strStr = (haystack, needle) => {
  if (!needle) return 0;
  let i = 0;
  while (haystack[i]) {
    if (haystack[i] === needle[0]) {
      let j = 1;
      while (needle[j] && (haystack[i + j] === needle[j])) j += 1;
      if (j === needle.length) return i;
    }
    i += 1;
  }
  return -1;
};

const test = strStr('mississippi', 'issip') === 4
          && strStr('hello', 'll') === 2
          && strStr('aaaaa', 'bba') === -1;
console.log('test: ', test);
