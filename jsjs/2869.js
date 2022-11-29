// 달팽이는 올라가고 싶다
let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('sample.txt').toString().split(' ');

let a = Number(input[0]); // 올라감
let b = Number(input[1]); // 미끄러짐
let v = Number(input[2]); // 나무 높이
let days = (v - b) / (a - b); // (a - b)(days - 1) + a = v
console.log(Math.ceil(days)); // 올림