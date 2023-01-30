// 다항함수의 미분
let fx = require('fs').readFileSync('test.txt').toString().trim();

let idx = fx.indexOf('x');
if (idx < 0)
	console.log(0);
else if (idx === 0)
	console.log(1);
else if (idx === 1 && fx[0] === '-')
	console.log(-1);
else
	console.log(fx.slice(0, idx));