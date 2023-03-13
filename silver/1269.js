// 대칭 차집합
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let a = new Set(input[1].split(' '));
let b = new Set(input[2].split(' '));
let cnt = 0;
let dup = 0;
a.forEach(el => b.has(el) ? dup++ : cnt++);
b.forEach(el => a.has(el) ? dup++ : cnt++);
console.log(cnt);