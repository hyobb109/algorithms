// 회사에 있는 사람
let [n, ...input] = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let log = new Set();
for (let i = 0; i < +n; i++) {
	let personalLog = input[i].split(' ');
	if (personalLog[1] === 'enter') log.add(personalLog[0])
	else if (personalLog[1] === 'leave') log.delete(personalLog[0]);
}

let names = [...log].sort().reverse();
console.log(names.join('\n'));