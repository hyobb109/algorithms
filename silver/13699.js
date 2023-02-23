// 점화식
const n = Number(require('fs').readFileSync('test.txt').toString().trim());

let t = new Array(n + 1).fill(0n);
t[0] = 1n;
for (let i = 1; i <= n; i++) {
	for (let j = 0; j < i; j++) {
		t[i] += t[j] * t[i - j - 1];
	}
}

console.log(t[n].toString());