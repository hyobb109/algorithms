// 소수
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let [m, n] = [+input[0], +input[1]];
let prime = new Array(n + 2).fill(true);
prime[0] = false;
prime[1] = false;
for (let num = 4; num <= n; num++){
	for (let k = 2; k <= Math.sqrt(num); k++) {
		if (num % k === 0) {
			prime[num] = false;
			break;
		} 
	}
}
let primes = [];
let sum = 0;
let min = n + 1;
for (let num = m; num <= n; num++) {
	if (prime[num]) {
		if (num < min) min = num;
		primes.push(num);
		sum += num;
	}
}
if (primes.length === 0) console.log(-1);
else console.log(`${sum}\n${min}`);
