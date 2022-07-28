const encrypt = (str) => {
  let encryptStr = '';
  for (let i = 0; i < str.length; i += 2) {
    encryptStr = `${encryptStr}${str[i + 1] || ''}${str[i]}`;
  }
  return encryptStr;
};

const test = encrypt('move') === 'omev'
          && encrypt('attack') === 'taatkc'
          && encrypt('go!') === 'og!';

console.log(test);
