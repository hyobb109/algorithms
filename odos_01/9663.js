// N-Queen
let input = require('fs').readFileSync('test1.txt').toString();
let cnt = 0;
let n = Number(input);
let queens = new Array(n).fill(-1);

function valid(idx) {
	for (let i = 0; i < idx; i++) {
		if (queens[idx] === queens[i] || idx - i === Math.abs(queens[idx] - queens[i]))
			return false;
	}
	return true;
}

function nQueen(idx) {
	if (idx === n) {
		cnt++;
		return;
	}
	for (let k = 0; k < n; k++) {
		queens[idx] = k;
		if (valid(idx))
			nQueen(idx + 1);
	}
}

nQueen(0);
console.log(cnt);