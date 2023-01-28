// 유기농 배추
let [t, ...input] = require('fs').readFileSync('test.txt').toString().trim().split('\n');

function bfs(farm, vis, m, n){
	const dx = [0, 0, 1, -1];
	const dy = [-1, 1, 0, 0];
	let cnt = 0;
	let q = [];
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (vis[i][j] || farm[i][j] == 0) continue;
			vis[i][j] = true;
			q.push([i, j]);
			cnt++;
			while(q.length) {
				let [x, y] = q.shift();
				// 상하좌우 배추 탐색
				for (let dir = 0; dir < 4; dir++) {
					let nx = x + dx[dir];
					let ny = y + dy[dir];
					if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
					if (vis[nx][ny] || farm[nx][ny] == 0) continue;
					vis[nx][ny] = true;
					q.push([nx, ny]);
				}
			}
		}
	}
	return cnt;
}

let res = [];
for (let i = 0; i < +t; i++) {
	let [m, n, k] = input.shift().split(' ').map(Number);
	let farm = new Array(m).fill(0).map(() => new Array(n).fill(0));
	let vis = new Array(m).fill(false).map(() => new Array(n).fill(false));
	// 배추 심기
	for (let j = 0; j < k; j++) {
		let [x, y] = input.shift().split(' ').map(Number);
		farm[x][y] = 1;
	}
	res.push(bfs(farm, vis, m, n));
}
console.log(res.join('\n'));