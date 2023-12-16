let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let res = '';
let comb = new Array(M);
function getComb(n, s) {
  if (n === M) {
    res += comb.join(' ') + '\n';
    return;
  }
  for (let i = s; i < N; i++) {
    const k = numbers[i];
    comb[n] = k;
    getComb(n + 1, i);
  }
}

getComb(0, 0);
console.log(res);
