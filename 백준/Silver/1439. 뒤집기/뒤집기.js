const S = require('fs').readFileSync('/dev/stdin').toString().trim();

let ones = S.split('0').filter(Boolean).length;
let zeros = S.split('1').filter(Boolean).length;

ones < zeros ? console.log(ones) : console.log(zeros);
