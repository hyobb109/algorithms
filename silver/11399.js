// ATM
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let p = input[1].split(' ').map(Number).sort((a, b) => a - b);
let res = p[0];
p.reduce((acc, curr) => {
	res += (acc + curr);
	return (acc + curr);
});
console.log(res);
