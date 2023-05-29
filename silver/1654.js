// 랜선 자르기
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let [k, n] = input.shift().split(' ').map(Number);
let lines = input.map(Number);
let s = 1;
let e = Math.max(...lines);
while (s <= e) {
	let cnt = 0;
	let m = parseInt((s + e) / 2);
	lines.forEach(el => cnt += parseInt(el / m))
	if (cnt >= n) s = m + 1;
	else if (cnt < n) e = m - 1;
}
console.log(e);