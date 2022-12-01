//하얀 칸
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//let input = fs.readFileSync('sample.txt').toString().trim().split('\n');

let res = 0;
for (let i = 0; i < 8; i += 2) {
  for (let j = 0; j < 8; j += 2) {
    if (input[i][j] === 'F')
      res++;
  }
}
for (let i = 1; i < 8; i += 2) {
  for (let j = 1; j < 8; j += 2) {
    if (input[i][j] === 'F')
      res++;
  }
}
console.log(res);