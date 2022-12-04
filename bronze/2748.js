// 피보나치 수 2 (DP)
let input = require('fs').readFileSync('sample.txt').toString().trim();
//let input = require('fs').readFileSync('/dev/stdin').toString().trim();

// Number 범위: -(2^53 − 1) ~ 2^53 − 1
let n = Number(input);
let fibo = new Array(n + 1);
// BigInt 타입은 Number 안전 한계(Number.MAX_SAFE_INTEGER)넘어서는 정수 저장, 연산 가능
// 정수 끝에 n 붙이거나 BigInt() 사용
// BigIng와 Number는 혼합해서 연산 불가(Type Error)
fibo[0] = 0n;
fibo[1] = 1n;
for (let i = 2; i <= n; i++) {
	fibo[i] = fibo[i-1] + fibo[i-2];
}
// 숫자 끝에 n이 붙어서 문자열로 바꿔줘서 출력
console.log(fibo[n].toString()); 