// 주식
let [t, ...input] = require('fs').readFileSync('test.txt').toString().trim().split('\n');

t = Number(t);
let res = '';

function maxProfit(n, price) {
	let profit = 0;
	let max = price[n - 1];
	for (let i = n - 2; i >= 0; i--) {
		if (price[i] < max) profit += (max - price[i]);
		else max = price[i];
	}
	res += `${profit}\n`;
}

for (let i = 0; i < t * 2; i += 2) {
	let n = Number(input[i]);
	let price = input[i + 1].split(' ').map(Number);
	maxProfit(n, price)
}

console.log(res.trim());