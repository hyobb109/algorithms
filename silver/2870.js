// 수학숙제
let [n, ...lines] = require("fs")
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split("\n");

let res = [];
lines.forEach((line) => {
  console.log(line.match(/\d+/g));
  line.split(/\D/).forEach((num) => {
    if (num.length) {
      num == 0 ? res.push("0") : res.push(num.replace(/(^0+)/, ""));
    }
  });
});
console.log(res.sort((a, b) => a - b).join("\n"));

// 다른 방식 => line.match(/\d+/g)로 연속되는 숫자 찾고 BigInt로 바꾸기
혀;
