// 인사성 밝은 곰곰이
let [n, ...chat] = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let hi = new Set();
let count = 0;
for (let i = 0; i < +n; i++) {
	if (chat[i] === 'ENTER') {
		count += hi.size;
		hi.clear();
	} else	hi.add(chat[i]);
}
count += hi.size;
console.log(count);