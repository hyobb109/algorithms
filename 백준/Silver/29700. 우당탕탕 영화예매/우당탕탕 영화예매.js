const [n, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const K = +n.split(' ')[2];
let cnt = 0;
input.forEach((row) => {
  const available = row.split('1');
  available.forEach((seats) => {
    if (seats.length >= K) cnt += seats.length - K + 1;
  });
});
console.log(cnt);