// A -> B
let input = require('fs').readFileSync('test.txt').toString().trim().split(' ').map(Number);

function count(a, b) {
  let cnt = 1;
  // b -> a 거꾸로 계산
  while (b > a) {
    if (b % 2 && b % 10 != 1)
      return -1;
    if (b % 2 === 0)
      b = b / 2;
    else
      b = parseInt(b / 10);
    if (b === a)
      return cnt + 1;
    cnt++;
  }
  return -1;
}

let a = input[0];
let b = input[1];
console.log(count(a, b));