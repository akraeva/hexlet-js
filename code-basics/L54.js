const isInternationalPhone = (phone) => phone.slice(0, 1) === '+';

let res = isInternationalPhone('89602223423'); // false
console.log(res);
res = isInternationalPhone('+79602223423'); // true
console.log(res);
