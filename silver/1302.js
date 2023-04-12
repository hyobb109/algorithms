// 베스트셀러
let [n, ...books] = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let record = new Map();
let max = 1;
for (let i = 0; i < +n; i++){
	if (record.has(books[i])) {
		let cnt = record.get(books[i]) + 1;
		record.set(books[i], cnt);
		if (cnt > max) max = cnt;
	} else record.set(books[i], 1);
}
// console.log(record);
let bestseller = [];
record.forEach((value, key) => {
	if (max === value) bestseller.push(key);
});
console.log(bestseller.sort());