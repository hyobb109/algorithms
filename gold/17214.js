// 다항 함수의 적분
let input = require('fs').readFileSync('test.txt').toString().trim();
let fx = [...input];

function integral() {
	let res = '';
	let x = fx.indexOf('x');
	let a, b;
	if (x === -1) {
		b = Number(input);
		if (b === 0) return ('W');
		if (b === 1) return ('x+W')
		if (b === -1) return ('-x+W');
		return (b + 'x+W');
	}
	else {
		a = Number(fx.slice(0, x).join(''));
		if (a === 2) res += 'xx';
		else if (a === -2) res += '-xx';
		else res += a / 2 + 'xx';
		if (x === fx.length - 1) return (res + '+W');
		b = Number(fx.slice(x + 1).join(''));
		if (fx[x + 1] === '+') res += '+';
		if (b === 1) return (res + 'x+W');
		else if (b === -1) return (res + '-x+W');
		res += b + 'x+W';
	}
	return res;
}

console.log(integral());