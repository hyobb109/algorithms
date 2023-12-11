const [N, M] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let used = new Array(10).fill(false);
let comb = new Array(M);
let res = '';
function getSequence(s, k) {
  if (k === M) {
    res += comb.join(' ') + '\n';
    return;
  }
  for (let i = s; i <= N; ++i) {
    if (!used[i]) {
      comb[k] = i;
      used[i] = true;
      getSequence(i + 1, k + 1);
      used[i] = false;
    }
  }
}

getSequence(1, 0);
console.log(res.trim());
