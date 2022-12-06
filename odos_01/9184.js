// 신나는 함수 실행
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

function w(a, b, c) {
	if (a <= 0 || b <= 0 || c <= 0)
		return 1;
	if (a > 20 || b > 20 || c > 20)
		return (w(20, 20, 20));
	if (a < b && b < c)
		return (w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c));
	return (w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1));
}

let a, b, c, res;
let dp = new Array(21);
dp[0] = new Array(21);
dp[0][0] = new Array(21).fill(0);
console.log(dp);

// for (let i = 0; i < input.length; i++) {
// 	let args = input[i].split(' ').map(Number);
// 	a = args[0], b = args[1], c = args[2];
// 	if (a <= 0 || b <= 0 || c <= 0)
// 		res = 1;
// 	else if (a > 20 || b > 20 || c > 20)
// 		res = w(20, 20, 20);
// 	else
// 		res = w(a, b, c);
// 	console.log(`w(${a}, ${b}, ${c}) = ${res}`);
// }
