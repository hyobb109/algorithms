let [N, ...nums] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let sum = [];
for (let i = 0; i < N; i++) {
  for (let j = i; j < N; j++) {
    sum.push(nums[i] + nums[j]);
  }
}
sum.sort((a, b) => a - b);
nums.sort((a, b) => a - b);
for (let i = N - 1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (search(nums[i] - nums[j])) {
      console.log(nums[i]);
      return;
    }
  }
}

function search(n) {
  let start = 0;
  let end = sum.length - 1;
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (sum[mid] < n) start = mid + 1;
    else if (sum[mid] > n) end = mid - 1;
    else return true;
  }
  return false;
}
