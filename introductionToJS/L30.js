const getLetter = (string, charNumber) => string[charNumber - 1] || '';

const name = 'Hexlet';

const test = getLetter(name, 11) === ''
             && getLetter(name, 1) === 'H'
             && getLetter(name, 0) === ''
             && getLetter(name, 6) === 't';

console.log(test);
