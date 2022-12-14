// 동전 0
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let tmp = input.shift().split(' ').map(Number);
let n = tmp[0];
let k = tmp[1];
// filter로 원하는 값만 뽑아서 새로운 배열로 저장
let arr = input.map(Number).filter((value) => value <= k);
let cnt = 0;
let coin = 0;
while (k > 0) {
  coin = parseInt(k / arr[arr.length - 1]);
  cnt += coin;
  if (coin > 0)
    k -= arr[arr.length - 1] * coin;
  arr.pop();
}
console.log(cnt);