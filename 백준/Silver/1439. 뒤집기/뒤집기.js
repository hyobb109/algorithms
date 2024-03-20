const S = require('fs').readFileSync('/dev/stdin').toString().trim();

const ONES = S.split('0').filter(Boolean).length;
const ZEROS = S.split('1').filter(Boolean).length;

console.log(Math.min(ONES, ZEROS));
