// 암호 - 질문게시판 참고
let [set, pw] = require('fs').readFileSync('test.txt').toString().trim().split('\n');

pw = [...pw];
const total = set.trim().length;
const n = pw.length;
let res = 0;
let digit = 1;
for (let i = n - 1; i >= 0; i--){
	res = (res + digit * (set.indexOf(pw[i]) + 1)) % 900528;
	digit = (digit * total) % 900528;
}
console.log(res);