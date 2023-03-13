// 거스름돈
const n = Number(require('fs').readFileSync('test.txt').toString().trim());

console.log(n);
let dp = new Array(n + 1).fill(-1);
dp[2] = 1;
for (let i = 4; i <= n; i++) {
	if (dp[i - 2] !== -1) dp[i] = dp[i - 2] + 1;
	else if (dp[i - 5] !== -1) = dp[i - 5] + 5;
	if (i % 5 === 0) dp[i] = i / 5;
	else if (i % 2 === 0) dp[i] = Math.min(i / 2, dp[i]);
}
dp[4] = dp[3] + dp[1], dp[2] + dp[2];
dp[5] = dp[4] + dp[1];
dp[6] = dp