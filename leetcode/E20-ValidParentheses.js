/* eslint-disable no-useless-escape */
import assert from 'assert';

const isValid = (s) => {
  if (!s) return true;
  if (s.length % 2 !== 0) return false;

  let str = s;

  while (str.indexOf('()') !== -1
      || str.indexOf('{}') !== -1
      || str.indexOf('\[\]') !== -1) {
    // здесь должно быть нормельно регулярное выражение
    str = str.replace('()', '').replace('{}', '').replace('\[\]', '');
  }
  return str.length === 0;
};

/* Через массив - медленно
const isValid = (s) => {
  if (!s) return true;
  if (s.length % 2 !== 0) return false;

  let replace = true;
  let str = s.split('');

  while (replace && (str.length > 0)) {
    replace = false;
    for (let i = 0; i < str.length - 1; i += 1) {
      const subStr = str[i] + str[i + 1];
      if (subStr === '()' || subStr === '{}' || subStr === '[]') {
        replace = true;
        str[i] = '';
        str[i + 1] = '';
      }
    }
    if (replace) str = str.filter((x) => x);
  }

  if (str.length === 0) return true;
  return false;
}
*/

/* Через строки - очень медленно
const isValid = (s) => {
  if (!s) return true;
  if (s.length % 2 !== 0) return false;

  let replace = true;
  let str = s;

  while (replace && (str.length > 0)) {
    replace = false;
    let res = '';
    let i = 0;
    while (i < str.length) {
      const pair = str.slice(i, i + 2);
      if (pair === '()' || pair === '{}' || pair === '[]') {
        replace = true;
        i += 2;
      } else {
        res += str[i];
        i += 1;
      }
    }
    str = res;
  }
  if (str.length === 0) return true;
  return false;
};
*/

// tests
try {
//  assert.equal(isValid('()'), true);
//  assert.equal(isValid('()[]{}'), true);
//  assert.equal(isValid('(]'), false);
//  assert.equal(isValid('{[]}'), true);
  assert.equal(isValid('(){}}{'), false);

  console.log('\nit works! :)');
} catch (error) {
  console.log(`Something went wrong :( \n${error}\n`);
}
