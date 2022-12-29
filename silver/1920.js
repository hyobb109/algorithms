// 수 찾기 -> 배열 이분탐색보다는 set이 빠름
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

// 이분 탐색
// function search(arr, val) {
// 	let start = 0;
// 	let end = arr.length - 1;
// 	while (start <= end) {
// 		let mid = parseInt((start + end) / 2);
// 		if (val === arr[mid]) return 1;
// 		if (val > arr[mid]) start = mid + 1;
// 		else end = mid - 1;
// 	}
// 	return 0;
// }

let numSet = new Set(input[1].trim().split(' '));
console.log(numSet, input[3]);
let res = input[3].trim().split(' ').map(val => numSet.has(val) ? 1 : 0);

console.log(res.join('\n'));