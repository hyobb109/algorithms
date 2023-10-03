// 기상캐스터
let input = require('fs')
  .readFileSync('sample.txt')
  .toString()
  .trim()
  .split('\n');

const [H, W] = input[0].split(' ').map(Number);
let area = [];
for (let i = 1; i <= H; i++) {
  area.push([...input[i]]);
}
let res = [];
for (let i = 0; i < H; i++) {
  let line = [];
  let cloud = -1;
  for (let j = 0; j < W; j++) {
    if (area[i][j] === 'c') {
      cloud = 0;
      line.push(cloud);
    } else {
      if (cloud === -1) {
        line.push(-1);
      } else {
        line.push(++cloud);
      }
    }
  }
  res.push(line.join(' '));
}

console.log(res.join('\n'));
