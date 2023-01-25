// 문자열 집합
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let s = new Set(input.slice(1, n + 1));
let strs = input.slice(n + 1);
let cnt = 0;
strs.forEach(el => {
	if (s.has(el)) cnt++
});
console.log(cnt);