let [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const meetings = input
  .map((el) => el.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

let max = 0;
let endTime = 0;
meetings.forEach((time) => {
  if (time[0] >= endTime) {
    ++max;
    endTime = time[1];
  }
});

console.log(max);