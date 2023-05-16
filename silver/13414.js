// 수강신청
let [n, ...input] = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let [k, l] = n.split(' ').map(Number);
let students = new Set();
for (let i = 0; i < l; i++){
	if (students.has(input[i])) {
		students.delete(input[i]);
		students.add(input[i]);
	} else {
		students.add(input[i]);
	}
}
// console.log(students);

let id = students.values();
let res = '';
for (let i = 0; i < k; i++) {
	const val = id.next().value;
	if (val !== undefined)
		res += val + '\n';
}
console.log(res.trim());