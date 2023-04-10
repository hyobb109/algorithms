// LCS (Longest Common Subsequence)
let [s1, s2] = require('fs').readFileSync('test.txt').toString().trim().split('\n');

// LCS 이차원 배열
let str1 = '0' + s1;
let str2 = '0' + s2;
let lcs = new Array(str1.length).fill(0).map(() => new Array(str2.length).fill(0));
let max = -1;
for (let i = 1; i < str1.length; i++) {
	for (let j = 1; j < str2.length; j++) {
		if (str1[i] === str2[j]) {
			lcs[i][j] = lcs[i - 1][j - 1] + 1;
		} else {
			lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
		}
		if (lcs[i][j] > max) max = lcs[i][j];
	}
}
console.log(max);

// 일차원 배열
let dp = new Array(s2.length).fill(0);
let cnt = 0;
for (let i = 0; i < s1.length; i++) {
	for (let j = 0; j < s2.length; j++) {
		if (s1[i] === s2[j]) {
			dp[j] = cnt + 1;
		} else if (cnt < dp[j]) cnt = dp[j];
	}
	console.log(dp, cnt);
}
console.log(dp);