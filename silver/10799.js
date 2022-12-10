// 쇠막대기
let input = require('fs').readFileSync('test.txt').toString().trim().split('');

let cnt = 0;
let pipe = 0; 
for (let i = 0; i < input.length; i++) {
	if (input[i] === '(') pipe++;
	else {
		pipe--;
		if (input[i - 1] === '(') cnt += pipe;
		else cnt++;
	}
}

console.log(cnt);