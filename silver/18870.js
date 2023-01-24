// 좌표 압축
// 배열 사용하면 시간초과 => Map 으로 해결
let [n, input] = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let x = input.split(' ').map(Number);
let set = [...new Set(x)].sort((a, b) => a - b);
let coord = new Map();
set.forEach((el, i) => coord.set(el, i));
for (let i = 0; i < n; i++)
	x[i] = coord.get(x[i]);
console.log(x.join(' '));