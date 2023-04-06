// 숨바꼭질
let [n, k] = require('fs').readFileSync('test.txt').toString().trim().split(' ');

let q = [];
q.push(+n);

let pos = new Array(100001).fill(0);

function check(x, nx) {
	if (nx < 0 || nx > 100001) return;
	if (pos[nx] > 0) return;
	pos[nx] = pos[x] + 1;
	q.push(nx);
}

let x = nx = 0;
while (q.length){
	x = q.shift();
	if (x === +k) break;
	check(x, x + 1);
	check(x, x - 1);
	check(x, 2 * x);
}

console.log(pos[x]);