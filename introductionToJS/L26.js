const getHiddenCard = (card, count = 4) => {
  const cut = card.slice(-4, card.length);
  return `${'*'.repeat(count)}${cut}`;
};

const res = getHiddenCard('1234567812345678', 2) === '**5678'
          && getHiddenCard('1234567812345678', 3) === '***5678'
          && getHiddenCard('1234567812345678') === '****5678'
          && getHiddenCard('2034399002121100', 1) === '*1100';

console.log(res);
