// 양 - BFS
let input = require('fs').readFileSync('test.txt').toString().split('\n');

const num = input.shift().split(' ');
const r = Number(num[0]);
const c = Number(num[1].trim());
const field = input.map(val => Array.from(val.trim()));
let vis = new Array(r + 1).fill(false).map(() => new Array(c + 1).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let q = [];
let sheep = wolf = 0;

for (let i = 0; i < r; i++) {
	for (let j = 0; j < c; j++) {
		if (vis[i][j] || field[i][j] === '#')
			continue;
		vis[i][j] = true;
		q.push([i, j]);
		let o = v = 0;
		while (q.length) {
			let pos = q.shift();
			let x = pos[0];
			let y = pos[1];
			if (field[x][y] === 'o') o++;
			else if (field[x][y] === 'v') v++;
			for (let dir = 0; dir < 4; dir++) {
				let nx = x + dx[dir];
				let ny = y + dy[dir];
				if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;
				if (vis[nx][ny] || field[nx][ny] === '#') continue;
				vis[nx][ny] = true;
				q.push([nx, ny]);
			}
		}
		if (o > v) sheep += o;
		else wolf += v;
	}
}
console.log(`${sheep} ${wolf}`);
