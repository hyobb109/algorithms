const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [R, C] = input[0].split(' ').map(Number);
let map = input.slice(1).map((el) => el.split(''));
const SHEEP = 0;
const WOLF = 1;
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let wolf = 0;
let sheep = 0;
let res = [0, 0];
let q = [];
for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (map[i][j] !== 'v' && map[i][j] !== 'k') continue;
    q.push([i, j]);
    if (map[i][j] === 'v') ++wolf;
    if (map[i][j] === 'k') ++sheep;
    map[i][j] = 'o';
    while (q.length) {
      let [x, y] = q.pop();

      for (let dir = 0; dir < 4; dir++) {
        let cx = x + dx[dir];
        let cy = y + dy[dir];
        if (cx < 0 || cy < 0 || cx >= R || cy >= C) continue;
        if (map[cx][cy] === '#' || map[cx][cy] === 'o') continue;
        if (map[cx][cy] === 'v') ++wolf;
        else if (map[cx][cy] === 'k') ++sheep;
        q.push([cx, cy]);
        map[cx][cy] = 'o';
      }
    }
    sheep > wolf ? (res[SHEEP] += sheep) : (res[WOLF] += wolf);
    wolf = 0;
    sheep = 0;
  }
}

console.log(res.join(' '));
