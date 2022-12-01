// 과제 안 내신 분
let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('sample.txt').toString().split('\n');

let arr = new Array(31).fill(0);
for (let i = 0; i < 28; i++) {
  arr[Number(input[i])] = 1;
}

for (let i = 1; i < 31; i++) {
  if (arr[i] == 0)
    console.log(i);
}