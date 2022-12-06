// 하노이 탑
let input = require('fs').readFileSync('test.txt').toString().trim();
//let input = require('fs').readFileSync('/dev/stdin').toString().trim();

function towerOfHanoi(a, b, n, res) {
	if (n === 1) {
		res.push(`${a} ${b}`);
		return;
	}
	towerOfHanoi(a, 6 - a - b, n - 1, res);
	res.push(`${a} ${b}`);
	towerOfHanoi(6 - a - b, b, n - 1, res);
}

let res = [];
let n = Number(input);
let bigN = BigInt(n);
let k = 2n ** bigN - 1n;
console.log(String(k));
if (n <= 20) {
	towerOfHanoi(1, 3, n, res);
	console.log(res.join('\n'));
}