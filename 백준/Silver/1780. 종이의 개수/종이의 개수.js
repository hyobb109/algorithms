const [num, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let map = input.map((el) => el.split(' ').map(Number));

let res = [0, 0, 0];

function isSame(n, x, y) {
  for (let i = x; i < x + n; ++i) {
    for (let j = y; j < y + n; ++j) {
      if (map[i][j] != map[x][y]) return false;
    }
  }
  return true;
}

function divide(n, x, y) {
  if (isSame(n, x, y)) {
    ++res[map[x][y] + 1];
    return;
  }
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      divide(n / 3, x + (n * i) / 3, y + (n * j) / 3);
    }
  }
}

divide(+num, 0, 0);
console.log(res.join('\n'));
