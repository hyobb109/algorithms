let [n, ...numbers] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

console.log(numbers.sort((a, b) => b - a).join('\n'));
