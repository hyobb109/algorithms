// 01 타일
let n = Number(require('fs').readFileSync('test.txt'));
// let n = Number(require('fs').readFileSync('/dev/stdin'));

dp = new Array(n + 1);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
for (let i = 3; i <= n; i++)
	dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;

console.log(dp[n]);