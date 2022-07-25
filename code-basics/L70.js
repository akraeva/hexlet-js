const makeItFunny = (normalStr, number) => {
  let i = 0;
  let funnyStr = '';
  let char = '';
  while (i < normalStr.length) {
    char = ((i + 1) % number === 0) ? normalStr[i].toUpperCase() : normalStr[i];
    funnyStr = `${funnyStr}${char}`;
    i += 1;
  }
  return funnyStr;
};

const text = 'I never look back';
const test = makeItFunny(text, 3) === 'I NevEr LooK bAck';
console.log(test);
