let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N, M] = input.shift();
const A = input.slice(0, N);
const B = input.slice(N);
let res = [];
for (let i = 0; i < N; ++i) {
  let line = [];
  for (let j = 0; j < M; ++j) {
    line.push(A[i][j] + B[i][j]);
  }
  res.push(line.join(" "));
}
console.log(res.join("\n"));
