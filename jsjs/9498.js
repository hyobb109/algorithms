// 시험성적
let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('sample.txt').toString();

let score = Number(input);
let res = 'F';
if (score >=90)
	res = 'A';
else if (score>= 80)
   res = 'B';
else if (score>= 70)
   res = 'C';
else if (score>= 60)
   res = 'D';
console.log(res);