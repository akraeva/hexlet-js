const getHiddenCard = (cardNumber, showNumber = 4) => {
  const cutNumber = cardNumber.slice(-4, cardNumber.length);
  return `${'*'.repeat(showNumber)}${cutNumber}`;
};

const res1 = getHiddenCard('1234567812345678', 2); // "**5678"
const res2 = getHiddenCard('1234567812345678', 3); // "***5678"
const res3 = getHiddenCard('1234567812345678');    // "****5678"
const res4 = getHiddenCard('2034399002121100', 1); // "*1100"

console.log(res1, res2, res3, res4);
