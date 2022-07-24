const getLetter = (string, charNumber) => string[charNumber - 1] || '';

const name = 'Hexlet';

// Обычное обращение возвращает undefined
const res = [];
res.push((name[10]) === undefined);

// 11 символ соответствует 10 индексу
res.push(getLetter(name, 11) === '');

res.push(getLetter(name, 1) === 'H');
res.push(getLetter(name, 0) === '');
res.push(getLetter(name, 6) === 't');

console.log(res);
