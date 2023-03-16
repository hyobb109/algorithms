// 알고리즘 수업 - 점근적 표기 1
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const c = +input[1];
const n0 = +input[2];
let res = 1;

// 모든 n >= n0에 대하여 f(n) <= c * n 인 양의 상수 c 와 n0가 존재한다 (그래프 그려보면 됨)
if (c < a || n0 < b / (c - a)) res = 0;
console.log(res);

// 삼항연산자 -> 더 느림
// (c < a || n0 < b / (c - a)) ? console.log(0) : console.log(1);