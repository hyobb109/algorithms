// 토마토
let [nums, ...input] = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let [m, n] = nums.split(' ').map(Number);
let tomatoes = input.map(el => el.split(' ').map(Number));

class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	push(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		}
		else {
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.length;
	}
	shift() {
		if (this.length === 0) return null;
		let tmp = this.first;
		if (this.length === 1) this.last = null;
		this.first = tmp.next;
		this.length--;
		return tmp.value;
	}
}

let q = new Queue();
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let res = 0;
let empty = 0;
let visit = 0;
let total = m * n;

for (let i = 0; i < n; i++) {
	for (let j = 0; j < m; j++) {
		if (tomatoes[i][j] === 1) {
			q.push([i, j]);
			visit++;
		} else if (tomatoes[i][j] === -1) empty++;
	}
}

function bfs() {
	let max = -1;
	while (q.length) {
		let [x, y] = q.shift();
		for (let dir = 0; dir < 4; dir++) {
			let nx = x + dx[dir];
			let ny = y + dy[dir];
			if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
			if (tomatoes[nx][ny] !== 0) continue;
			tomatoes[nx][ny] = tomatoes[x][y] + 1;
			if (tomatoes[nx][ny] > max) max = tomatoes[nx][ny];
			q.push([nx, ny]);
			visit++;
		}
	}
	if (visit + empty !== total) res = -1
	else res = max - 1;
}

if (visit + empty !== total) bfs();
console.log(res);