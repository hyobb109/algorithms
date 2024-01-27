const [nums, arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const M = nums[0];
const N = nums[1];

function countSnacks(len) {
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    cnt += Math.floor(arr[i] / len);
  }
  return cnt;
}

function getSnackLen() {
  let min = 1;
  let max = Math.max(...arr);
  while (min <= max) {
    let mid = parseInt((min + max) / 2);
    if (countSnacks(mid) >= M) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return min - 1;
}

console.log(getSnackLen());
