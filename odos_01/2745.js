// 진법변환
let input = require('fs').readFileSync('test.txt').toString().trim().split(' ');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let base = Number(input[1]);
let n = parseInt(input[0], base); // parseInt("string", radix) n진수에서 10진수로 변환 -> .toSrting(n)하면 다시 n진수로 변환 가능
console.log(n);