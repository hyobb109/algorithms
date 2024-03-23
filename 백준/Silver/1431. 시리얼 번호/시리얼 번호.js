let [n, ...sn] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const compare = (a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  let sumA = a.split('').reduce((acc, curr) => acc + (Number(curr) | 0), 0);
  let sumB = b.split('').reduce((acc, curr) => acc + (Number(curr) | 0), 0);
  if (sumA !== sumB) return sumA - sumB;
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

console.log(sn.sort(compare).join('\n'));
