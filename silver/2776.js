// 암기왕
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// console.log(input);
const t = Number(input.shift());

for (let j = 0; j < t; j++) {
	input.shift();
	const set = new Set(input.shift().split(' ').map(Number));
	const m = Number(input.shift());
	const num = input.shift().split(' ').map(Number);
	let res = "";
	for (let i = 0; i < m; i++)
		set.has(num[i]) ? res += '1\n' : res += '0\n';
	console.log(res.trim());
}