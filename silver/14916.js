// 거스름돈
const n = Number(require('fs').readFileSync('test.txt').toString().trim());

let dp = new Array(n + 1).fill(-1);
dp[2] = 1;
dp[4] = 2;
for (let i = 5; i <= n; i++) {
	if (i % 5 === 0) dp[i] = i / 5;
	else {
		let a = dp[i - 2] + 1;
		let b = dp[i - 5] + 1;
		if (a && b) dp[i] = Math.min(a, b);
		else if (a === 0) dp[i] = b;
		else if (b === 0) dp[i] = a;
  }
}

console.log(dp[n]);