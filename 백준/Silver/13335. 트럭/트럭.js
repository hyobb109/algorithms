let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, w, l] = input[0].split(" ").map(Number);

const trucks = input[1].split(" ").map(Number);

let bridge = new Array(w - 1).fill(0);
let time = 1;
for (let i = 0; i < n;) {
  const sum = bridge.reduce((acc, curr) => acc + curr, 0);
  if (sum + trucks[i] <= l) {
    bridge.push(trucks[i++]);
  } else {
    bridge.push(0);
  }
  bridge.shift();
  ++time;
}

time += bridge.length;

console.log(time);