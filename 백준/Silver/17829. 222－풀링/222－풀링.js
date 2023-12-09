const [num, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let map = input.map((el) => el.split(' '));

function getNumber(x, y) {
  let numbers = [];
  for (let i = x; i < x + 2; ++i) {
    for (let j = y; j < y + 2; ++j) {
      numbers.push(+map[i][j]);
    }
  }
  return numbers.sort((a, b) => b - a)[1];
}

function divide(n, x, y) {
  if (n === 2) {
    return getNumber(x, y);
  }
  let res = [];
  for (let i = 0; i < 2; ++i) {
    for (let j = 0; j < 2; ++j) {
      res.push(divide(n / 2, x + (n * i) / 2, y + (n * j) / 2));
    }
  }
  return res.sort((a, b) => b - a)[1];
}

console.log(divide(+num, 0, 0));
