// 두 수의 합
let [n, num, x] = require('fs').readFileSync('test.txt').toString().trim().split('\n');

num = num.split(' ').map(Number);
let set = new Set(num);

function count(num, set, x) {
	let cnt = 0;
	if (x === 1) return cnt;
	for (let i = 0; i < num.length; i++) {
		let y = x - num[i];
		if (!set.has(num[i])) continue;
		set.delete(num[i]);
		if (set.has(y)) {
			set.delete(y);
			cnt++;
		}
	}
	return cnt;
}
console.log(count(num, set, +x));