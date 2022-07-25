const hasChar = (str, char) => {
  let i = 0;
  while (i < str.length) {
    if (str[i] === char) {
      return true;
    }
    i += 1;
  }
  return false;
};

const test = hasChar('Hexlet', 'H') === true
&& hasChar('Hexlet', 'h') === false
&& hasChar('Awesomeness', 'm') === true
&& hasChar('Awesomeness', 'd') === false;

console.log(test);
