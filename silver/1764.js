// 듣보잡
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
let res = [];

let never = new Set(input.splice(0, n));

input.forEach(el => {
	if (never.has(el))
		res.push(el);
});

console.log(`${res.length}\n${res.sort().join('\n')}`);