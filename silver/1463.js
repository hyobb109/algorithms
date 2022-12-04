// 1로 만들기
// [바킹독의 실전 알고리즘] 0x10강 - 다이나믹 프로그래밍
let input = require('fs').readFileSync('sample.txt').toString().trim();

let x = Number(input);
let dp = new Array(x + 1).fill(0);

for (let n = 2; n <= x; n++) {
  dp[n] = dp[n - 1] + 1;
  if (n % 3 === 0) {
    dp[n] = Math.min(dp[n / 3] + 1, dp[n]);
  }
  if (n % 2 === 0) {;
    dp[n] = Math.min(dp[n / 2] + 1, dp[n]);
  }
  // console.log(`dp[${n}] = ${dp[n]}`);
}
console.log(dp[x]);