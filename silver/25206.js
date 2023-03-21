// 너의 평점은
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let scale = new Map([
	['A+', 4.5],
	['A0', 4.0],
	['B+', 3.5],
	['B0', 3.0],
	['C+', 2.5],
	['C0', 2.0],
	['D+', 1.5],
	['D0', 1.0],
	['F', 0]
])

let grades = input.map(el => el.split(' '));
let totalCredit = totalSum = credit = score = 0;
for (let i = 0; i < input.length; i++) {
	credit = grades[i][1];
	score = grades[i][2];
	if (score !== 'P') {
		totalCredit += +credit;
		totalSum += credit * scale.get(score);
	}
}

console.log(totalSum / totalCredit);