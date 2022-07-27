const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  const lowerStr = str.toLowerCase();
  const lowerChar = char.toLowerCase();
  while (i < lowerStr.length) {
    count += (lowerStr[i] === lowerChar) ? 1 : 0;
    i += 1;
  }
  return count;
};

const test = countChars('HexlEt', 'e') === 2
          && countChars('HexlEt', 'E') === 2;

console.log(test);
