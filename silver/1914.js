// 하노이 탑
let input = require('fs').readFileSync('test.txt').toString().trim();
//let input = require('fs').readFileSync('/dev/stdin').toString().trim();

function towerOfHanoi(a, b, n) {
	if (n === 1) {
		console.log(a, b);
		return;
	}
	towerOfHanoi(a, 6 - a - b, n - 1);
	console.log(a, b);
	towerOfHanoi(6 - a - b, b, n - 1);
}

let n = Number(input);
let n_big = BigInt(n);
let k = 2n ** n_big - 1n;
console.log(String(k));
if (n <= 20)
	towerOfHanoi(1, 3, n);