// 신나는 함수 실행
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let dp = new Array(21).fill(0).map(() => new Array(21).fill(0).map(() => new Array(21).fill(0)));

function w(a, b, c) {
	if (a <= 0 || b <= 0 || c <= 0)
		return 1;
	if (a > 20 || b > 20 || c > 20)
		return w(20, 20, 20);
	if (dp[a][b][c]) // 값이 있다면 리턴
		return dp[a][b][c];
	if (a < b && b < c) {
		dp[a][b][c] = w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c);
		return dp[a][b][c];
	}
	dp[a][b][c] = w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1);
	return dp[a][b][c];
}

let a, b, c;

for (let i = 0; i < input.length - 1; i++) {
	let args = input[i].split(' ').map(Number);
	a = args[0], b = args[1], c = args[2];
	console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
}
