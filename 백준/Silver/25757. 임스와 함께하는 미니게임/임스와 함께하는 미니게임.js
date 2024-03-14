let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, GAME] = input[0].split(' ');
const map = new Map([
  ['Y', 1],
  ['F', 2],
  ['O', 3],
]);
let set = new Set(input.slice(1));
console.log(Math.floor(set.size / map.get(GAME)));
