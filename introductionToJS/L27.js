const capitalize = (str) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

let name = 'arya';
console.log((capitalize(name)) === 'Arya');

name = 'asdfGHJkl';
console.log((capitalize(name)) === 'Asdfghjkl');
