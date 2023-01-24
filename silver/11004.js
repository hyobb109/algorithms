// K번째 수
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let [n ,k] = input[0].split(' ').map(Number);
let num = input[1].split(' ').map(Number).sort((a, b) => a - b);
console.log(num[k - 1]);