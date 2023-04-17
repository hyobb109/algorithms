// 합분해 : 0 ~ n 까지 2개 더해서 그 합이 n이 되는 경우의 수
let [n, k] = require('fs').readFileSync('test.txt').toString().trim().split(' ').map(Number);
let dp = new Array(k).fill(0).map(() => new Array(n).fill(1));

for (let i = 0; i < k; i++){
	for (let j = 0; j < n; j++){
		if (i === 0) dp[i][j] = 1;
		else if (j === 0) dp[i][j] = i + 1;
		else dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1000000000;
	}
}
console.log(dp[k - 1][n - 1]);