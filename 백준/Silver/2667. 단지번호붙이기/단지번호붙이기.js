const [n, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +n;
let map = input.map((el) => el.split(''));
let houses = [];
let q = [];
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] !== '1') continue;
    q.push([i, j]);
    map[i][j] = '.';
    let area = 1;
    while (q.length) {
      const [x, y] = q.shift();
      for (let d = 0; d < 4; d++) {
        const cx = x + dx[d];
        const cy = y + dy[d];
        if (cx < 0 || cy < 0 || cx >= N || cy > N) continue;
        if (map[cx][cy] !== '1') continue;
        q.push([cx, cy]);
        map[cx][cy] = '.';
        ++area;
      }
    }
    houses.push(area);
  }
}

console.log(`${houses.length}\n${houses.sort((a, b) => a - b).join('\n')}`);
