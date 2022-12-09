// 한수
let input = require('fs').readFileSync('test.txt').toString().trim();

function addCount(n, cnt) {
	for (let num = 111; num <= n; num++)
	{
		let a = parseInt(num / 100);
		let b = parseInt((num - 100 * a) / 10);
		let c = num % 10;
		if (a - b === b - c)
			cnt++;
	}
	return cnt;
}

const n = Number(input);
let cnt = n;

if (n === 1000)
	cnt = 144;
else if (n >= 100)
	cnt = addCount(n, 99);
console.log(cnt);