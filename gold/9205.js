// 맥주 마시면서 걸어가기
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
const t = +input.shift();

function getDistance(currX, currY, dest) {
	return Math.abs(currX - dest[0]) + Math.abs(currY - dest[1]);
}

function bfs(n, coord) {
	let home = coord[0].split(' ').map(Number);
	let pentaport = coord[n + 1].split(' ').map(Number);
	let store = coord.slice(1, n + 1).map(el => el.split(' ').map(Number));	
	let q = [home];
	while(q.length) {
		let [x, y] = q.pop();
		let dist = getDistance(x, y, pentaport);
		// console.log(`x: ${x}, y: ${y}, dist: ${dist}`);
		if (dist <= 1000) return 'happy';
		for (let i = 0; i < store.length; i++) {
			if (getDistance(x, y, store[i]) <= 1000) {
				q.push(store[i]);
				store.splice(i, 1);
			}
		}
	}
	return 'sad';
}

let res = '';
for (let i = 0; i < t; i++) {
	let n = +input[i];
	res += bfs(n, input.splice(i + 1, n + 2)) + '\n';
}
console.log(res.trim());