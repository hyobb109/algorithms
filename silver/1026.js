// 보물
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
const n = +input[0];
let a = input[1].split(' ').map(Number).sort((a, b) => a - b);
let b = input[2].split(' ').map(Number).sort((a, b) => b - a);
let res = 0;
for (let i = 0; i < n; i++)
	res += a[i] * b[i];
console.log(res);