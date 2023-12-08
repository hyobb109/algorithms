const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let arr = input.map((el) => el.split(' '));
let dp = new Array(13);
dp[0] = '-';

for (let i = 1; i < 13; i++) {
  dp[i] = dp[i - 1] + ' '.repeat(Math.pow(3, i - 1)) + dp[i - 1];
}

let res = '';
arr.forEach((n, idx) => {
  res += dp[+n];
  if (idx < arr.length - 1) res += '\n';
});

console.log(res);
