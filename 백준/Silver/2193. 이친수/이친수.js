const N = +require('fs').readFileSync('/dev/stdin').toString().trim();

let dp = new Array(N);
dp[0] = 1n;
if (N > 1) dp[1] = 1n;

for (let i = 2; i < N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[N - 1].toString());
