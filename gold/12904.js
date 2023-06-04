// A와 B
let [s, t] = require('fs').readFileSync('test.txt').toString().trim().split('\n');
// console.log(s);
// console.log(t);

// s->t 로 
// 1. 문자열 뒤에 A 추가
// 2. 문자열 뒤집고 뒤에 B를 추가
let res = 0;
let tmp = [...t];
while (tmp.length > s.length) {
	let last = tmp.length - 1;
	// 맨 뒤가 A 면 -> 1번 규칙
	if (tmp[last] === 'A') tmp.pop();
	// 맨 뒤가 B면 2번 규칙
	else if (tmp[last] === 'B') {
		tmp.pop()
		tmp.reverse();
	}
	// console.log(tmp);
}
if (tmp.join('') === s) res = 1;
console.log(res);