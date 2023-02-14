// 문서 검색
let [str, word]  = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let cnt = 0;
let idx = str.indexOf(word);
while(idx !== -1) {
	// console.log(idx);
	str = str.slice(word.length + idx);
	// console.log(str);
	cnt++;
	idx = str.indexOf(word);
}
console.log(cnt);
