// 음식물 피하기
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
const [n, m, k] = input[0].split(' ').map(Number);

function set_map() {
	for (let i = 1; i <= k; i++) {
		const [r, c] = input[i].split(' ').map(Number);
		map[r - 1][c - 1] = '#';
	}
}

function bfs(map) {
	const dx = [0, 0, 1, -1];
	const dy = [-1, 1, 0, 0];
	let q = [];
	let max = -1;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (map[i][j] !== '#') continue;
			map[i][j] = 0;
			q.push([i, j]);
			let size = 0;
			while(q.length) {
				let [r, c] = q.shift();
				for (let dir = 0; dir < 4; dir++) {
					let x = r + dx[dir];
					let y = c + dy[dir];
					if (x < 0 || y < 0 || x >= n || y >= m) continue;
					if (map[x][y] !== '#') continue;
					map[x][y] = 0;
					q.push([x, y]);
				}
				size++;
			}
			if (size > max) max = size;
		}
	}
	console.log(max);
}

let map = new Array(n).fill(0).map(() => new Array(m).fill('.'));
set_map(map);
bfs(map);