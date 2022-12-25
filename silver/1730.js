// 판화
let input = require('fs').readFileSync('test.txt').toString().split('\n');

const n = Number(input.shift());
let board = new Array(n).fill('.').map(() => new Array(n).fill('.'));

function printBoard() {
	let res = '';
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++)
			res += board[i][j];
	res += '\n';
	}
	console.log(res.trim());
}

// 가장자리 예외처리!!
function solve() {
	const cmd = [...input.shift()];
	let x = y = 0;
	for(let i = 0; i < cmd.length; i++) {
		// console.log(cmd[i]);
		// console.log(`(x, y) = (${x}, ${y})`);
		if (cmd[i] === 'D') {
			if (x + 1 >= n) continue;
			if (board[x][y] === '-') board[x][y] = '+';
			else if (board[x][y] === '.') board[x][y] = '|';
			if (x < n - 1) {
				if (board[++x][y] === '.') board[x][y] = '|';
				else if (board[x][y] === '-') board[x][y] = '+';
			}
		}
		else if (cmd[i] === 'U') {
			if (x - 1 < 0) continue;
			if (board[x][y] === '-') board[x][y] = '+';
			else if (board[x][y] === '.') board[x][y] = '|';
			if (x > 0) {
				if (board[--x][y] === '.') board[x][y] = '|';
				else if (board[x][y] === '-') board[x][y] = '+';
			}
		}
		else if (cmd[i] === 'R') {
			if (y + 1 >= n) continue;
			if (board[x][y] === '|') board[x][y] = '+';
			else if (board[x][y] === '.') board[x][y] = '-';
			if (y < n - 1) {
				if (board[x][++y] === '.') board[x][y] = '-';
				else if (board[x][y] === '|') board[x][y] = '+';
			}
		}
		else if (cmd[i] === 'L') {
			if (y - 1 < 0) continue;
			if (board[x][y] === '|') board[x][y] = '+';
			else if (board[x][y] === '.') board[x][y] = '-';
			if (y > 0) {
				if (board[x][--y] === '.') board[x][y] = '-';
				else if (board[x][y] === '|') board[x][y] = '+';
			}
		}
		// console.log(`**(x, y) = (${x}, ${y})`);
		// console.log(board);
	}
}

solve();
printBoard();