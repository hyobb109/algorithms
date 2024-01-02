let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
let positions = input[1].split(' ').map(Number);

let q = new Array(N).fill(0).map((el, idx) => idx + 1);

let res = 0;
while (positions.length) {
  let pos = positions.shift();
  if (q[0] === pos) {
    q.shift();
  } else if (q.findIndex((el) => el === pos) < q.length / 2) {
    while (q[0] !== pos) {
      q.push(q.shift());
      ++res;
    }
    q.shift();
  } else {
    while (q[0] !== pos) {
      q.unshift(q.pop());
      ++res;
    }
    q.shift();
  }
}

console.log(res);
