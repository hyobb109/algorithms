// 나이트의 이동
let [t, ...input] = require('fs').readFileSync('test.txt').toString().trim().split('\n');

function bfs(n, pos, target) {
	const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
	const dy = [-1, 1, -2, 2, 2, -2, -1, 1];

	if (pos[0] === target[0] && pos[1] === target[1]) return 0;
	let board = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
	let q = [];
	for (let i = pos[0]; i < n; i++) {
		for(let j = pos[1]; j < n; j++) {
			if (board[i][j]) continue;
			q.push([i, j]);
			board[i][j] = 0;
			while (q.length) {
				let [x, y] = q.shift();
				if (x === target[0] && y === target[1]) return board[x][y];
				for (let dir = 0; dir < 8; dir++) {
					let nx = x + dx[dir];
					let ny = y + dy[dir];
					if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
					if (board[nx][ny]) continue;
					q.push([nx, ny]);
					board[nx][ny] = board[x][y] + 1;
				}
			}
		}
	}

}

let res = '';
for (let i = 0; i < +t; i++) {
	let n = +input.shift();
	let pos = input.shift().split(' ').map(Number);
	let target = input.shift().split(' ').map(Number)
	res += bfs(n, pos, target) + '\n';
}

console.log(res.trim());