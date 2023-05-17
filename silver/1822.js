// 차집합
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let a = input[1].split(' ').map(Number);
let b = new Set(input[2].split(' ').map(Number));
let diff = Array.from(new Set(a.filter(el => !b.has(el))));
console.log(diff.length);
console.log(diff.sort((a, b) => a - b).join(' '));
