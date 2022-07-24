const filterString = (string, char) => {
  let result = '';
  let i = 0;

  while (i < string.length) {
    // eslint-disable-next-line max-len
    if (string[i] !== char) { // (string[i] !== char.toLowerCase() && string[i] !== char.toUpperCase()) {
      result = `${result}${string[i]}`;
    }
    i += 1;
  }
  console.log(result);
  return result;
};

const str = 'If I look back I am lost';
const test = filterString(str, 'I') === 'f  look back  am lost'
            && filterString('zz Zorro', 'z') === ' Zorro';
console.log(test);
