const capitalize = (str) => `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`;

const name = 'arya';
console.log(capitalize(name)); // => "Arya"
