// 골드바흐의 추측
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n').map(Number);

// 에라토스테네스의 체로 0~10000까지 소수 판별 배열 생성
let prime = new Array(10001).fill(1);
prime[0] = 0;
prime[1] = 0;

function primeList() {
	for (let i = 4; i < 10001; i++) {
		for(let j = 2; j <= Math.sqrt(i); j++) {
			if (i % j === 0) prime[i] = 0;
		}
	}
}

const n = input.shift();
primeList();
for (let i = 0; i < n; i++) {
	let res;
	let min = 10000;
	for (let x = 2; x < 10001; x++) {
		y = input[i] - x;
		if (x > y) break;
		if (prime[x] && prime[y]) {
			if (y - x < min) {
				min = y - x;
				res = `${x} ${y}`
			}
		}
	}
	console.log(res);
}