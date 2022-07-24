const reverse = (string) => (string.split('').reverse().join(''));

const convertText = (text) => {
  let result;
  if (text) {
    const predicate = text[0] === text[0].toUpperCase();
    result = (predicate) ? (text) : (reverse(text));
  } else {
    result = '';
  }
  return result;
};

const test = convertText('Hello') === 'Hello'
  && convertText('hello') === 'olleh'
  && convertText('') === '';
console.log(test);
