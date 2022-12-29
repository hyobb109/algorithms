// 두 용액
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let solution = input[1].split(' ').map(Number).sort((x, y) => x - y);

let s = 0;
let e = Number(input[0]) - 1;
let sum = absSum = 0;
let res = new Array(2);
let min = 2000000001;

while (s < e) {
	sum = solution[s] + solution[e];
	if (sum === 0) {
		res = [solution[s], solution[e]];
		break;
	}
	absSum = Math.abs(sum);
	if (absSum < min) {
		min = absSum;
		res[0] = solution[s];
		res[1] = solution[e];
	}
	if (sum > 0) e--;
	else if (sum < 0) s++;
}

console.log(res.join(' '));