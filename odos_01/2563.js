// 색종이
let input = require('fs').readFileSync('test1.txt').toString().trim().split('\n');

let n = Number(input.shift());
// 배열 만든 후 map으로 각 원소를 배열로 바꿔줘서 2차원 배열 생성(map은 원소 값이 있어야 실행 됨)
let paper = new Array(101).fill(0).map(() => new Array(101).fill(0));
let x, y;
let tmp = [];
for (let i = 0; i < n; i++) {
	tmp = input.shift().split(' ').map(Number);
	x = tmp[0], y = tmp[1];
	for (let j = 0; j < 10; j++) {
		for (let k = 0; k < 10; k++) {
			paper[x + j][y + k] = 1;
		}
	}
}
// flat() 사용하면 원소 내 배열 원소 삭제되고 filter로 특정 값찾을 수 있음
let res = paper.flat().filter(value => value === 1).length;
console.log(res);