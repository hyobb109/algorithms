const [n, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const K = +n.split(' ')[2];
const seatsToBook = '0'.repeat(K);
const seats = input
  .filter((row) => row.includes(seatsToBook))
  .map((row) => row.split('1').filter((el) => el.length >= K));

let cnt = 0;
seats.forEach((row) => row.forEach(countSeats));

function countSeats(row) {
  if (row.length > K) for (let i = 0; row.length - i >= K; i++) ++cnt;
  else ++cnt;
}

console.log(cnt);
