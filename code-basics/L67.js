const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  const procStr = str.toLowerCase();
  const procChar = char.toLowerCase();
  while (i < procStr.length) {
    // console.log(`${i} ==> ${procStr[i]}`);
    if (procStr[i] === procChar) {
      count += 1;
      // console.log(`=======>${procStr[i]} = ${procChar} ==> ${count}`);
    }
    i += 1;
  }
  // console.log(count);
  return count;
};

const test = countChars('HexlEt', 'e') === 2
          && countChars('HexlEt', 'E') === 2;

console.log(test);
