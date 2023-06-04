// 두 배 더하기
let [n, input] = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let a = new Array(+n);
let b = input.split(' ').map(Number);
let cnt = 0;
while (b.reduce((acc, el) => acc + el, 0)) {
 	b.forEach((el, i) => {
		if (el % 2) {
			b[i]--;
			cnt++;
		}
	});
	b.forEach((el, i) => b[i] = el / 2);
	if (!b.reduce((acc, el) => acc + el, 0)) break;
	cnt++;
}
console.log(cnt);