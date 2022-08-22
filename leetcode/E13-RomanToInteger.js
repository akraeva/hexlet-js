import assert from 'assert';

const romanToInt = (s) => {
  const char = (i) => {
    switch (s[i]) {
      case 'I':
        return ((s[i + 1] === 'V' || s[i + 1] === 'X') ? -1 : 1);
      case 'V':
        return 5;
      case 'X':
        return ((s[i + 1] === 'L' || s[i + 1] === 'C') ? -10 : 10);
      case 'L':
        return 50;
      case 'C':
        return ((s[i + 1] === 'D' || s[i + 1] === 'M') ? -100 : 100);
      case 'D':
        return 500;
      case 'M':
        return 1000;
      default:
        return 1000;
    }
  };

  let res = 0;
  for (let j = s.length - 1; j >= 0; j -= 1) res += char(j);

  console.log('res: ', res);
  return res;
};

// tests
try {
  assert.equal(romanToInt('III'), 3);
  assert.equal(romanToInt('LVIII'), 58);
  assert.equal(romanToInt('MCMXCIV'), 1994);
  assert.equal(romanToInt(''), 0);
  console.log('\nIt works! :)');
} catch (error) {
  console.log(`Something went wrong :( \n${error}\n`);
}

/*
Symbol/ Value
I    1
V    5
X    10
L    50
C    100
D    500
M    1000
*/
