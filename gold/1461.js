// 도서관
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let [n, m] = input[0].split(' ').map(Number);
let tmp = input[1].split(' ').map(Number).sort((a, b) => a - b);
let books = tmp.map(el => el < 0 ? -el : el);
// console.log(books);
function countMove() {
	let cnt = 0;
	let check = 0;
	if (n === 1) return Math.abs(books[0]);
	while (books.length) {
		let max = Math.max(...books);
		if (check === 0) cnt += max;
		else cnt += 2 * max;
		if (books.length === 1) break;
		if (books[books.length - 1] === max) {
			// console.log('+++max:', max);
			for (let i = 0; i < m; i++) {
				if (tmp[books.length - 1] < 0) break;
				books.pop();
				tmp.pop();
				check++;
			}
		} else if (books[0] === max) {
			// console.log('---max:', max);
			for (let i = 0; i < m; i++) {
				if (tmp[0] > 0) break;
				books.shift();
				tmp.shift();
				check++;
			}
		}
		// console.log('books', books);
		// console.log('tmp', tmp);
	}
	return cnt;
}

console.log(countMove());
