const [N, M, K] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function comb(n, m) {
  if (n < m) return 0;
  return factorial(n) / (factorial(m) * factorial(n - m));
}
let tmp = 0;

for (let i = K; i <= M; i++) {
  tmp += comb(M, i) * comb(N - M, M - i);
}
let p = tmp / comb(N, M);
console.log(p);
