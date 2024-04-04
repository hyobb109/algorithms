let [n, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let expectedRanks = input.map(Number).sort((a, b) => a - b);

let dissatisfied = 0;
expectedRanks.forEach((rank, idx) => {
  dissatisfied += Math.abs(rank - (idx + 1));
});

console.log(dissatisfied);
