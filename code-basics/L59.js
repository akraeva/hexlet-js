const normalizeUrl = (address) => {
  let normalAddress;
  if (address.startsWith('https://')) {
    normalAddress = address;
  } else {
    normalAddress = `https://${address}`;
  }
  return normalAddress;
};

const res = normalizeUrl('google.com') === 'https://google.com' && normalizeUrl('https://ai.fi') === 'https://ai.fi';
console.log(res);
