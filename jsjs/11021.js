// A+B-7
let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('sample.txt').toString().trim().split('\n');

let t = Number(input.shift());
for (let i = 1; i <= t; i++) {
  let num = input.shift().split(' ').map(Number);
  let res = num[0] + num[1];
  console.log(`Case #${i}: ${res}`);
}
