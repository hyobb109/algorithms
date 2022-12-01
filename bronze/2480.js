//주사위 세개
let fs = require('fs');
const { config } = require('process');
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('sample.txt').toString().trim().split(' ');

input.sort();
let a = input[0];
let b = input[1];
let c = input[2];
let res = c * 100;

if (a === b && a === c)
  res = 10000 + a * 1000;
else if (a === b || b === c)
  res = 1000 + b * 100;
console.log(res);