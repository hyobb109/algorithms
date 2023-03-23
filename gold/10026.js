// 적록색약
let [n, ...input] = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let picture = input.map(el => el.split(''));
let noGreen = input.map(el => el.replaceAll('G', 'R').split(''));

function bfs(n, pic) {
	const dx = [1, -1, 0, 0];
	const dy = [0, 0, 1, -1];
	let vis = new Array(n).fill(false).map(() => new Array(n).fill(false));
	let q = [];
	let area = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (vis[i][j]) continue;
			q.push([i, j]);
			vis[i][j] = true;
			area++;
			while(q.length) {
				let [x, y] = q.shift();
				for (let dir = 0; dir < 4; dir++) {
					let nx = x + dx[dir];
					let ny = y + dy[dir];
					if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
					if (vis[nx][ny] || pic[nx][ny] !== pic[x][y]) continue;
					q.push([nx, ny]);
					vis[nx][ny] = true;
				}
			}
		}
	}
	return area;
}

console.log(`${bfs(+n, picture)} ${bfs(+n, noGreen)}`);