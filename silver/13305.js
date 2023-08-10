// 주유소
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let n = +input[0];
let dist = input[1].split(' ').map(BigInt);
let price = input[2].split(' ').map(BigInt);
let totalCost = 0n;

let min = price[0];
console.log(dist, price, min);
for (let i = 0; i < n - 1; i++) {
	totalCost += min * dist[i];
	if (price[i + 1] < min) min = price[i + 1];
}
console.log(totalCost.toString());