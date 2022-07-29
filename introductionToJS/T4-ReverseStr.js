/* eslint-disable consistent-return */
const reverse = (text) => {
  if (text.length > 0) {
    return `${reverse(text.slice(1)) || ''}${text[0]}`;
  }
};

const test = reverse('str') === 'rts'
          && reverse('hexlet') === 'telxeh';

console.log(test);
