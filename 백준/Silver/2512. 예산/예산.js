let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');


const N = +input[0];
const requests = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const budget = +input[2];

let s = 1;
let e = requests[N - 1];

while (s <= e) {
  let mid = Math.floor((s + e) / 2);
  let sum = 0;
  requests.forEach((req) => {
    sum += req <= mid ? req : mid;
  });
  sum <= budget ? (s = mid + 1) : (e = mid - 1);
}
console.log(e);
