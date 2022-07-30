const reverse = (str) => {
  const iter = (i) => (i < str.length ? `${iter(i + 1) || ''}${str[i]}` : '');
  return iter(0);
};
const test = reverse('hello, world!') === '!dlrow ,olleh'
          && reverse('cat') === 'tac'
          && reverse('tac') === 'cat'
          && reverse('') === ''
          && reverse('aaaa') === 'aaaa';
console.log(test);
