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
function getComb(n) {
  if (n === M) {
    res += comb.join(' ') + '\n';
    return;
  }
  for (let i = 0; i < N; i++) {
    const k = numbers[i];
    comb[n] = k;
    getComb(n + 1);
  }
}

getComb(0);
console.log(res);
