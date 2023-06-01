// 문자열 복사
let [s, p] = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let cnt = 0;
let str = '';
let startIdx = 0;
while (str !== p) {
	// 뒤에서부터 길이 줄여가면서 탐색
	for (let i = p.length - 1; i >= startIdx; i--){
		let term = p.slice(startIdx, i + 1);
		if (s.includes(term)) {
			// console.log(term);
			str += term;
			startIdx += term.length;
			// console.log('str', str, 'idx', startIdx);
			cnt++;
			break;
		}
	}
}
console.log(cnt);
