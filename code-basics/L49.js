const truncate = (text, length) => {
  const cutText = text.slice(0, length);
  return (`${cutText}...`);
};

console.log(truncate('hexlet', 2)); // 'he...'

const text = 'it works!';
console.log(truncate(text, 4)); // 'it w...'
