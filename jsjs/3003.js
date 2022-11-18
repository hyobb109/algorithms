// 킹, 퀸, 룩, 비숍, 나이트, 폰
let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('sample.txt').toString().split(' ');

let set = [1, 1, 2, 2, 2, 8];
for (let i=0; i < 6; i++){
  let res = set[i] - Number(input[i]);
  if (i == 5)
     console.log(res); 
  else
    process.stdout.write(res + ' ');
  }
