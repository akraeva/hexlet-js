// const normalizeUrl = (address) => (address.startsWith('https://') ? address : `https://${address}`);

const normalizeUrl = (address) => {
  if (address.startsWith('https://')) {
    return address;
  // eslint-disable-next-line no-else-return
  } else {
    return `https://${address}`;
  }
};

const res = normalizeUrl('google.com') === 'https://google.com'
         && normalizeUrl('https://ai.fi') === 'https://ai.fi';
console.log(res);
