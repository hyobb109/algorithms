let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const M = +input[1];
const S = input[2];

const P = 'IO'.repeat(N) + 'I';
let cnt = 0;
let tmp = S.slice(0);
let found = tmp.indexOf(P);
while (found !== -1) {
  tmp = tmp.slice(found + 2);
  found = tmp.indexOf(P);
  ++cnt;
}

console.log(cnt);
