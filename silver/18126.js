// 너구리 구구
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let n = +input[0];

let house = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
for (let i = 1; i < n; i++) {
	let [a, b, c] = input[i].split(' ').map(Number);
	house[a][b] = c;
	house[b][a] = c;
}

function bfs(n, house){
	let visited = new Array(n + 1).fill(false);
	let dist = new Array(n + 1).fill(0);
	let q = [1];
	while (q.length) {
		let curr = q.shift();
		visited[curr] = true;
		for (let i = 1; i <= n; i++) {
			if (visited[i] || house[curr][i] === 0) continue;
			q.push(i);
			dist[i] = dist[curr] + house[curr][i];
			visited[i] = true;
		}
	}
	console.log(Math.max(...dist));
}
// console.log(house);
bfs(n, house);
