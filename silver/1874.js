// 스택수열
let seq = require('fs').readFileSync('test.txt').toString().trim().split('\n').map(Number);

let n = seq.shift();

function sequence(){
	let res = "";
	let stack = [];
	let num = 1;
	for (let i = 0; i < n; i++){
		while (num <= seq[i]) {
			res += '+\n';
			stack.push(num++);
		}
		if (stack.pop() !== seq[i]) {
			console.log('NO');
			return ;
		}
		res += '-\n';
	}
	console.log(res.trim());
}

sequence();