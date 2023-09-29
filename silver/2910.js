// 빈도 정렬
let input = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");

const [N, C] = input[0].split(" ").map(Number);
let message = input[1].split(" ").map(Number);
let map = new Map();
message.forEach((num) => {
  if (map.has(num)) {
    let cnt = map.get(num);
    map.set(num, cnt + 1);
  } else {
    map.set(num, 1);
  }
});
let arr = [...map];
arr.sort((a, b) => b[1] - a[1]);
let res = [];
arr.forEach((el) => {
  for (let i = 0; i < el[1]; i++) res.push(el[0]);
});
console.log(res.join(" "));
