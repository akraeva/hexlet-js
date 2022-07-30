import assert from 'assert';

// strings.ls
const length = (str) => str.length;
const toUpperCase = (str) => str.toUpperCase();
const toLowerCase = (str) => str.toLowerCase();

const solution = (text) => {
  let result = toUpperCase(text[0]);
  for (let i = 1; i < length(text); i += 1) {
    const char = text[i];
    result += (text[i - 1] === ' ' && char !== ' ') ? toUpperCase(char) : toLowerCase(char);
  }
  return result;
};

// tests
try {
  assert.equal(solution('hello, world!'), 'Hello, World!');
  assert.equal(solution('  hello,   world!'), '  Hello,   World!');
  assert.equal(solution(' many different words inside sentence'), ' Many Different Words Inside Sentence');
  console.log('\nit works! :)');
} catch (error) {
  console.log(`Something went wrong :( \n${error}\n`);
}
