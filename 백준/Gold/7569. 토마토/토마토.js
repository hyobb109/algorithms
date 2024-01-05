let [nums, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N, H] = nums.split(' ').map(Number);

let box = [];
while(input.length) {
    box.push(input.splice(0, N).map(el => el.split(' ')));
}

class Node {
    constructor(val) {
        this.val = val;
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
        if (!this.length) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.length;
    }
    shift() {
        if (!this.length) return null;
        let tmp = this.first;
        if (this.length === 1) this.last = null;
        this.first = tmp.next;
        --this.length;
        return tmp.val;
    }
}



function bfs() {
    const dx = [1, -1, 0, 0, 0, 0];
    const dy = [0, 0, 1, -1, 0, 0];
    const dz = [0, 0, 0, 0, 1, -1];
    while (q.length) {
        const [x, y, z] = q.shift();
        for (let d = 0; d < 6; ++d) {
            const cx = x + dx[d];
            const cy = y + dy[d];
            const cz = z + dz[d];
            if (cx < 0 || cy < 0 || cz < 0 || cx >= H || cy >= N || cz >= M) continue;
            if (days[cx][cy][cz] >= 0) continue;
            days[cx][cy][cz] = days[x][y][z] + 1;
            q.push([cx, cy, cz]);
        }
    }
}

let days = new Array(H).fill(0).map(() => new Array(N).fill(0).map(() => new Array(M).fill(0)));
let q = new Queue;

for (let i = 0; i < H; i++) {
    for (let j = 0; j < N; j++) {
        for (let k = 0; k < M; k++) {
            if (box[i][j][k] === '1') q.push([i, j, k]);
            else if (box[i][j][k] === '0') days[i][j][k] = -1;
        }
    }
}

bfs();
let min = Math.min(...days.flat(2));
let res = min === -1 ? -1 : Math.max(...days.flat(2));

console.log(res);