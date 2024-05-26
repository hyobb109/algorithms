const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const account = input.slice(1).map(Number);

let s = Math.max(...account);
let e = account.reduce((a, b) => a + b, 0);
let res = e;

while (s <= e) {
  let mid = parseInt((s + e) / 2);
  if (isValid(mid)) {
    res = mid;
    e = mid - 1;
  } else {
    s = mid + 1;
  }
}

console.log(res);

function isValid(val) {
  let currentSum = 0;
  let cnt = 1;

  for (let i = 0; i < N; i++) {
    if (currentSum + account[i] > val) {
      cnt++;
      currentSum = account[i];
      if (cnt > M) return false;
    } else {
      currentSum += account[i];
    }
  }
  return true;
}