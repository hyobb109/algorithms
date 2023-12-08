const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let arr = input.map((el) => el.split(' '));
let res = '';

function divide(len) {
  if (len === 1) {
    res += '-';
    return;
  }
  divide(len / 3);
  res += ' '.repeat(len / 3);
  divide(len / 3);
}

arr.forEach((n, idx) => {
  divide(Math.pow(3, +n));
  if (idx < arr.length - 1) res += '\n';
});

console.log(res);
