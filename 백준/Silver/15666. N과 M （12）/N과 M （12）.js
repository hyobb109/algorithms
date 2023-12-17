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
  let tmp = 0;
  for (let i = s; i < N; ++i) {
    const K = numbers[i];
    if (K === tmp) continue;
    comb[n] = K;
    tmp = K;
    getComb(n + 1, i);
  }
}

getComb(0, 0);
console.log(res);
