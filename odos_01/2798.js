// 블랙잭
// 백준 입력받을 때 trim()으로 공백 제거 필수..
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let num= input.shift().split(' ').map(Number);
let n = num[0], m = num[1];
let set = input.toString().split(' ').map(Number);
let res, max = 0;

for (let i = 0; i < n - 2; i++) {
	for (let j = i + 1; j < n - 1; j++) {
		for (let k = j + 1; k < n; k++) {
			res = set[i] + set[j] + set[k];
			if (res <= m && res > max)
				max = res;
			}
		}
	}
console.log(max);