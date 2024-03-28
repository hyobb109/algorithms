const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const board = input.slice(1);

function findHeart() {
  for (let i = 0; i < N; i++) {
    const pos = board[i].indexOf('*');
    if (pos > 0) {
      return [i + 2, pos + 1];
    }
  }
}

const heart = findHeart();
let size = new Array(5).fill(0);
// arms
for (let i = 0; i < N; i++) {
  const row = heart[0] - 1;
  if (i === heart[1] - 1) continue;
  if (board[row][i] === '*') {
    i < heart[1] - 1 ? ++size[0] : ++size[1];
  }
}

function countBody() {
  for (let i = heart[0]; i < N; i++) {
    if (board[i].includes('*_*')) return i;
    ++size[2];
  }
  return 0;
}
const legs = countBody();
let left = board[legs].indexOf('*');
let right = left + 2;
for (let i = legs; i < N; i++) {
  if (board[i].indexOf('*') === left) ++size[3];
  if (board[i].lastIndexOf('*') === right) ++size[4];
}
console.log(heart.join(' '));
console.log(size.join(' '));
