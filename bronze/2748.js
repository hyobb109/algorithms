// 피보나치 수 2 (DP)
let input = require('fs').readFileSync('sample.txt').toString().trim();
//let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let n = Number(input);
let fibo = new Array(n + 1);

fibo[0] = 0;
fibo[1] = 1;
for (let i = 2; i <= n; i++) {
	fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo[n]);