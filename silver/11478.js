// 서로 다른 부분 문자열의 개수
let s = require('fs').readFileSync('test.txt').toString().trim();

let set = new Set();
for (let i = 0; i < s.length; i++) {
	for (let j = i + 1; j <= s.length; j++) {
		set.add(s.slice(i, j));
	}
}
console.log(set.size);