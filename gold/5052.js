// 전화번호 목록
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

function check(numbers, n) {
	for (let i = 0; i < n - 1; i++) {
		let num = numbers[i].trim();
		// slice()로 num 길이만큼 추출하여 비교
		// numbers[i + 1].indexOf(num)으로 비교했더니 100%에서 틀림.. 이유는..?? 
		if (num === numbers[i + 1].slice(0, num.length))
			return 'NO\n';
	}
	return 'YES\n';
}

const t = Number(input[0]);
let res = '';
let idx = 1;
for (let i = 0; i < t; i++) {
	// shift() 보다 index로 접근하는 것이 빠름
	const n = Number(input[idx++]);
	// array.splice(start[, deleteCount[, 추가할 item1[, item2[, ...]]]])
	let numbers = input.splice(idx, n).sort();
	res += check(numbers, n);
}
console.log(res.trim());