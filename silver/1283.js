// 단축키 지정
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

const n = +input[0];
let set = new Set();

function setKey(strs) {
	for (let i = 0; i < strs.length; i++) {
		if (set.has(strs[i][0].toUpperCase()) === false) {
			set.add(strs[i][0].toUpperCase());
			strs[i] = '[' + strs[i].slice(0, 1) +']' + strs[i].slice(1);
			return strs.join(' ');
		}
	}
	for (let i = 0; i < strs.length; i++) {
		let str = strs[i];
		for (let j = 0; j < str.length; j++) {
			if (set.has(str[j].toUpperCase()) === false) {
				set.add(str[j].toUpperCase());
				strs[i] = str.slice(0, j) + `[${str[j]}]` + str.slice(j + 1);
				return strs.join(' ');
			}
		}
	}
	return strs.join(' ');
}

let res = '';
for (let i = 1; i <= n; i++) {
	res += setKey(input[i].split(' ')) + '\n';
}

console.log(res.trim());