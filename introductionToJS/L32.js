// вместо функции хекслета
const reverse = (string) => (string.split('').reverse().join(''));

const convertText = (str) => {
  let result = '';
  if (str) {
    const isCapitalize = str[0] === str[0].toUpperCase();
    result = (isCapitalize) ? (str) : (reverse(str));
  }
  return result;
};

const test = convertText('Hello') === 'Hello'
  && convertText('hello') === 'olleh'
  && convertText('') === '';
console.log(test);
