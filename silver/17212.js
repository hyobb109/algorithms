// 달나라 토끼를 위한 구매대금 지불 도우미
const n = Number(require('fs').readFileSync('test.txt').toString().trim());

// 1원 2원 5원 7원 => 동전 최소 개수 출력
let dp = new Array(n + 1).fill(0);
dp[1] = dp[2] = dp[5] = dp[7] = 1;
dp[3] = dp[4] = dp[6] = 2;
for (let i = 8; i <= n; i++) {
	dp[i] = Math.min(dp[i - 1] + 1, dp[i - 2] + 1, dp[i - 5] + 1, dp[i - 7] + 1);
}

console.log(dp[n]);