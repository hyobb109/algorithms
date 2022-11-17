// 아!
let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('sample.txt').toString().split('\n');

let a = input[0].length;
let b = input[1].length;
let res = 'go';

if (b > a)
	res = 'no';
console.log(res);
