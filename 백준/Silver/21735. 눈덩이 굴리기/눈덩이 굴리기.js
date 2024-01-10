let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
let a = [0].concat(input[1].split(' ').map(Number));
let max = 0;
function makeSnowball(time, pos, snowball) {
  if (time === M || pos >= N) {
    max = Math.max(max, snowball);
    return;
  }
  if (pos < N) makeSnowball(time + 1, pos + 1, snowball + a[pos + 1]);
  if (pos < N - 1)
    makeSnowball(time + 1, pos + 2, Math.floor(snowball / 2) + a[pos + 2]);
}

makeSnowball(0, 0, 1);
console.log(max);
