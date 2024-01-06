let [nums, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = nums.split(' ').map(Number);
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let field = input.map(el => el.split(''));

function bfs(ALLY) {
    let total = 0;
    let q = [];
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (field[i][j] !== ALLY) continue;
            q.push([i, j]);
            field[i][j] = '*';
            let area = 1;
            while (q.length) {
                const [x, y] = q.shift();
                for (let dir = 0; dir < 4; dir++) {
                    const cx = x + dx[dir];
                    const cy = y + dy[dir];
                    if (cx < 0 || cy < 0 || cx >= M || cy >= N) continue;
                    if (field[cx][cy] !== ALLY) continue;
                    q.push([cx, cy]);
                    field[cx][cy] = '*';
                    ++area;
                }
            }
            total += area ** 2;
        }
    }
    return total;
}

console.log(`${bfs('W')} ${bfs('B')}`);