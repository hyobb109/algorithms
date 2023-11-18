let [num, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = num.split(" ").map(Number);
let map = new Map();
let passwords = input.splice(0, N);
passwords.forEach((el) => {
  const [URL, PW] = el.split(" ");
  map.set(URL, PW);
});

let res = input.map((el) => map.get(el));
console.log(res.join("\n"));
