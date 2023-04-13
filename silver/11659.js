// 구간 합 구하기 4
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let a = input[1].split(' ').map(Number);
// console.log(a);

let sum = new Array(n);
a.forEach((el, idx) => {
	if (idx === 0) sum[idx] = el;
	else sum[idx] = sum[idx - 1] + el;
})

console.log(sum);
let res = '';
let acc = 0;
for (let t = 2; t < m + 2; t++) {
	let [i, j] = input[t].split(' ').map(Number);
	if (i === j) acc = a[i - 1];
	else if (i === 1) acc = sum[j - 1];
	else acc = sum[j - 1] - sum[i - 2];
	res += acc + '\n';
}

console.log(res.trim());