// 나무 자르기
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let trees = input[1].split(' ').map(Number);
let s = 1;
let e = Math.max(...trees);
let res = 0;
while (s <= e) {
	let mid = Math.floor((s + e) / 2);
	let total = 0;
	trees.forEach(el => el > mid ? total += (el - mid) : total += 0);
	if (total >= m)
		s = mid + 1;
	else if (total < m)
		e = mid - 1;
}
console.log(e);