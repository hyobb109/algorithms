// 프린터 큐
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let t = +input[0];

function solve(info) {
	let q = [];
	// n은 문서의 개수, m은 q에서 궁금한 문서의 index
	let [n, m] = info[0].split(' ').map(Number);
	let docs = info[1].split(' ').map((el, idx) => [Number(el), idx]);
	let cnt = 0;
	while (docs.length) {
		// 뒤에 중요도가 높은 것이 없으면 프린트, 아니면 넘김
		idx = docs.findIndex(el => el[0] > docs[0][0]);
		// console.log(`idx: ${idx}`);
		if (idx === -1) {
			// console.log(docs);
			cnt++;
			if (docs.shift()[1] === m) break;
			// console.log(`cnt: ${cnt}`);
		} else {
			for (let i = 0; i < idx; i++) {
				docs.push(docs.shift());
			}
		}
	}
	return cnt;
}

let res = '';
for (let i = 1; i <= 2 * t; i += 2) {
	res += solve(input.slice(i, i + 2)) + '\n';
}

console.log(res.trim());