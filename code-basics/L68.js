const reverse = (str) => {
  let i = str.length - 1;
  let result = '';
  while (i >= 0) {
    result = `${result}${str[i]}`;
    i -= 1;
  }
  return result;
};

const name = 'Bran';
console.log(reverse(name) === 'narB' && reverse('') === '');
