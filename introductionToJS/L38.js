/* eslint-disable no-plusplus */
const makeItFunny = (str, number) => {
  let i = 0;
  let result = '';
  let char = '';
  while (i < str.length) {
    char = ((i + 1) % number === 0) ? str[i++].toUpperCase() : str[i++];
    result = `${result}${char}`;
  }
  return result;
};

const text = 'I never look back';
const test = makeItFunny(text, 3) === 'I NevEr LooK bAck';
console.log(test);
