let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const JINHO = input[0];
console.log(input.slice(2).filter((el) => el === JINHO).length);
