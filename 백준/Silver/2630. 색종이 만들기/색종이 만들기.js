// 바킹독 문제집 답안 참고
const [num, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let map = input.map((el) => el.split(' ').map(Number));

let white = 0;
let blue = 0;

function isSame(n, x, y) {
  for (let i = x; i < x + n; ++i) {
    for (let j = y; j < y + n; ++j) {
      if (map[i][j] != map[x][y]) return false;
    }
  }
  return true;
}

function divide(n, x, y) {
  // 모두 같은 색이면 return
  if (isSame(n, x, y)) {
    map[x][y] === 1 ? ++blue : ++white;
    return;
  }
  // 종이 4등분
  for (let i = 0; i < 2; ++i) {
    for (let j = 0; j < 2; ++j) {
      divide(n / 2, x + (n * i) / 2, y + (n * j) / 2);
    }
  }
}

divide(+num, 0, 0);
console.log(`${white}\n${blue}`);
