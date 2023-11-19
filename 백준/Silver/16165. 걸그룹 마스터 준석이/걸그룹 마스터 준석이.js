let [num, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +num[0];
let map = new Map();
let i = 0;
let groups = -1;
while (++groups < N) {
  const GROUP = input[i];
  const NUM = +input[i + 1];
  const NAMES = new Set(input.slice(i + 2, i + 2 + NUM));
  map.set(GROUP, NAMES);
  i += NUM + 2;
}

let res = "";
while (i < input.length) {
  const NAME = input[i++];
  const TYPE = input[i++];
  if (TYPE == "1") {
    for (const [key, val] of map) {
      if (val.has(NAME)) {
        res += key + "\n";
        break;
      }
    }
  } else if (TYPE == "0") {
    res += [...map.get(NAME)].sort().join("\n") + "\n";
  }
}

console.log(res.trim());
