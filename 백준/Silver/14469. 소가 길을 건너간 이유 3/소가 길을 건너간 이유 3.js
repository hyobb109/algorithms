let [n, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +n;
let q = input
  .map((el) => el.split(' ').map(Number))
  .sort((a, b) => a[0] - b[0]);

let time = q[0][0] + q[0][1];
for (let i = 1; i < N; i++) {
  let [enter, check] = q[i];
  if (time > enter) enter = time;
  time = enter + check;
}
console.log(time);
