const [N, ...ropes] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

ropes.sort((a, b) => a - b);

let max = 0;
for (let i = 1; i <= N; i++) {
  max = Math.max(max, ropes[N - i] * i);
}

console.log(max);
