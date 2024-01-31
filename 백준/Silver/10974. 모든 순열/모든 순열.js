const N = +require('fs').readFileSync('/dev/stdin').toString().trim();

let comb = new Array(N);
let used = new Array(N).fill(false);
let res = '';
function getComb(k) {
  if (k === N) {
    res += comb.join(' ') + '\n';
    return;
  }
  for (let i = 0; i < N; i++) {
    if (used[i]) continue;
    comb[k] = i + 1;
    used[i] = true;
    getComb(k + 1);
    used[i] = false;
  }
}

getComb(0);
console.log(res);