// 수 정렬하기 2
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n').map(Number);

// sort()는 유니코드 순서로 정렬, 숫자를 정렬하려면 바교 함수 필요
function numCmp(x, y) {
	return (x - y);
}

input.shift();
console.log(input.sort(numCmp).join('\n'));