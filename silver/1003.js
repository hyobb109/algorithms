// 피보나치 함수
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n').map(Number);
input.shift();
let n = Math.max(...input);
let cnt = new Array(n + 1).fill(0).map(() => new Array(2).fill(0));
cnt[0] = [1, 0];
cnt[1] = [0, 1];

for (let i = 2; i <= n; i++) {
	cnt[i][0] = cnt[i - 1][0] + cnt[i - 2][0];
	cnt[i][1] = cnt[i -1][1] + cnt[i - 2][1];
}	
// console.log(n, cnt);

let res = [];
input.forEach(el => res.push(cnt[el].join(' ')));
console.log(res.join('\n'));