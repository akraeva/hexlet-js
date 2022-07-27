const mySubstr = (str, len) => {
  let i = 0;
  let substr = '';
  while (i < len) {
    substr = `${substr}${str[i]}`;
    i += 1;
  }
  return substr;
};

const text = 'If I look back I am lost';
const res = mySubstr(text, 1) === 'I'
         && mySubstr(text, 7) === 'If I lo';
console.log(res);
