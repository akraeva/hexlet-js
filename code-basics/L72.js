const encrypt = (str) => {
  let encryptStr = '';
  for (let i = 0; i < str.length - 1; i += 2) {
    encryptStr = `${encryptStr}${str[i + 1]}${str[i]}`; // правильно: str[i + 1] || ''
  }
  if (str.length !== encryptStr.length) {
    encryptStr = `${encryptStr}${str[str.length - 1]}`;
  }
  return encryptStr;
};

const test = encrypt('move') === 'omev'
          && encrypt('attack') === 'taatkc'
          && encrypt('go!') === 'og!';

console.log(test);
