//오븐시계
let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let input = fs.readFileSync('sample.txt').toString().trim().split('\n');
// shift는 배열에서 첫 요소 제거하고 제거된 요소 반환
// map은 배열 내 모든 요소에 콜백함수 적용하고 새로운 배열 반환
// => arr.map(function(element, index, array){  }, this);
let clock = input.shift().split(' ').map(Number);
let tmp = Number(input);
// 몫을 구할 땐 paresInt 사용
let cookingTime = [parseInt(tmp/60), tmp%60];
let hour = clock[0] + cookingTime[0];
let min = clock[1] + cookingTime[1];

if (min >= 60) {
	hour += 1;
	min -= 60;
}
if (hour >= 24)
	hour -= 24;
console.log(hour, min);
