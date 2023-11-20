let [T, ...numbers] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const MAX = Math.max(...numbers);

dp = new Array(MAX + 1);
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= MAX; ++i) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

let res = numbers.map((el) => dp[el]);
console.log(res.join("\n"));
