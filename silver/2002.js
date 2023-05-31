// 추월 
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let n = +input[0];
let DK = input.slice(1, n + 1);
let YS = input.slice(n + 1);
let enter = new Map();
DK.forEach((el, i) => enter.set(el, i));
let cnt = 0;
for (let i = 0; i < n - 1; i++) {
	for (let j = i + 1; j < n; j++) {
		if (enter.get(YS[j]) < enter.get(YS[i])) {
			cnt++;
			break;
		}
	}
}
console.log(cnt);