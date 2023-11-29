let [num, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = num.split(' ').map(Number);
let map = input.map((el) => el.replaceAll('.', 'P').split(''));
let visited = new Array(N).fill(0).map(() => new Array(M).fill(false));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let q = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visited[i][j] || map[i][j] !== 'W') continue;
    visited[i][j] = true;
    q.push([i, j]);
    while (q.length) {
      const [x, y] = q.shift();
      for (let dir = 0; dir < 4; dir++) {
        let cx = x + dx[dir];
        let cy = y + dy[dir];
        if (cx < 0 || cy < 0 || cx >= N || cy >= M) continue;
        if (visited[cx][cy] || map[cx][cy] === '#') continue;
        while (map[cx][cy] === '+') {
          let tx = cx + dx[dir];
          let ty = cy + dy[dir];
          if (map[tx][ty] === '#') break;
          cx = tx;
          cy = ty;
        }
        if (visited[cx][cy]) continue;
        if (map[cx][cy] === 'P') map[cx][cy] = '.';
        visited[cx][cy] = true;
        q.push([cx, cy]);
      }
    }
  }
}

console.log(map.map((el) => el.join('')).join('\n'));
