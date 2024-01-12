const [N, ...stairs] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let dp = new Array(N);
dp[0] = stairs[0];
dp[1] = stairs[1] + stairs[0];
dp[2] = stairs[2] + Math.max(stairs[0], stairs[1]);

for (let i = 3; i < N; i++) {
  dp[i] = stairs[i] + Math.max(dp[i - 2], stairs[i - 1] + dp[i - 3]);
}

console.log(dp[N - 1]);
