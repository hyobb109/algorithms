// 수 정렬하기
let input = require('fs').readFileSync('sample.txt').toString().trim().split('\n').map(Number);

input.shift();
input.sort((a, b) => a - b);
console.log(input.join('\n'));