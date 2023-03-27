// 단어 뒤집기 2
let s = require('fs').readFileSync('test.txt').toString().trim();

let i = 0;
let res = '';
while (i < s.length) {
	if (s[i] === '<') {
		while (s[i] !== '>') {
			res += s[i++];
		} res += s[i++];
	} else {
		let stack = [];
		if (s[i] === ' ') res += s[i++];
		while (s[i] !== ' ' && s[i] !== '<' && i < s.length) {
			stack.push(s[i++]);
		}
		res += stack.reverse().join('');
	}
}
console.log(res);