const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const N = +input[0];
const K = +input[1];
const numbers = input.splice(2);
let comb = new Array(K);
let used = new Array(N).fill(false);
let set = new Set();

function getComb(k) {
  if (k === K) {
    set.add(comb.join(''));
    return;
  }
  for (let i = 0; i < N; i++) {
    if (used[i]) continue;
    comb[k] = numbers[i];
    used[i] = true;
    getComb(k + 1);
    used[i] = false;
  }
}

getComb(0);
console.log(set.size);
