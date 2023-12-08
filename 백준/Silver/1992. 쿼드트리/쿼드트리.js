const [num, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let map = input.map((el) => el.split(''));

function isSame(n, x, y) {
  for (let i = x; i < x + n; ++i) {
    for (let j = y; j < y + n; ++j) {
      if (map[i][j] != map[x][y]) return false;
    }
  }
  return true;
}

let res = '';
function divide(n, x, y) {
  if (isSame(n, x, y)) {
    res += map[x][y];
    return;
  }
  res += '(';
  for (let i = 0; i < 2; ++i) {
    for (let j = 0; j < 2; ++j) {
      divide(n / 2, x + (n * i) / 2, y + (n * j) / 2);
    }
  }
  res += ')';
}

divide(+num, 0, 0);
console.log(res);
