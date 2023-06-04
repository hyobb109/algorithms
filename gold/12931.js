// 두 배 더하기
let [n, input] = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let b = input.split(' ').map(Number);
let cnt = 0;
let total = b.reduce((acc, el) => acc + el, 0);
while (total !== 0) {
 	b.forEach((el, i) => {
		if (el % 2) {
			b[i]--;
			cnt++;
		}
	});
	b.forEach((el, i) => b[i] = el / 2);
	total = b.reduce((acc, el) => acc + el, 0);
	if (total === 0) break;
	cnt++;
}
console.log(cnt);