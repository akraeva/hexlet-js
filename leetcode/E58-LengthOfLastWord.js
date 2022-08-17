const lengthOfLastWord = (s) => {
  if (!s) return 0;

  let end = s.length - 1;
  while (s[end] === ' ') end -= 1;
  if (end === -1) return 0;

  let start = end;
  while (s[start] !== ' ' && start > -1) start -= 1;

  return (start === end ? 1 : end - start);
};

const test = lengthOfLastWord('day') === 3
          && lengthOfLastWord('Hello World') === 5
          && lengthOfLastWord('   fly me   to   the moon  ') === 4
          && lengthOfLastWord('luffy is still joyboy') === 6
          && lengthOfLastWord('       ') === 0
          && lengthOfLastWord('a') === 1
          && lengthOfLastWord('a ') === 1;
console.log('test: ', test);
