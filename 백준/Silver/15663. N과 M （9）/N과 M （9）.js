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

let res = [];
let comb = [];
let used = new Array(N).fill(false);
function getComb(n) {
  if (n === M) {
    if (!res.includes(comb.join(' '))) res.push(comb.join(' '));
    return;
  }
  for (let i = 0; i < N; i++) {
    const k = numbers[i];
    if (used[i]) continue;
    comb.push(k);
    used[i] = true;
    getComb(n + 1);
    comb.pop();
    used[i] = false;
  }
}

getComb(0);
console.log(res.join('\n'));
