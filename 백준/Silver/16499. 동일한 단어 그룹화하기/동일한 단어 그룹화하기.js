const [n, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let set = new Set(input.map((word) => word.split('').sort().join('')));

console.log(set.size);
