// 영단어 암기는 괴로워
let [nums, ...words] = require('fs').readFileSync('test.txt').toString().trim().split('\n');
const [n, m] = nums.split(' ').map(Number);
let wordBook = new Map();

// m 이상인 단어만 단어장에 담음
words.forEach(function(word) {
	if (word.length >= m) {
		if (wordBook.has(word)) {
			wordBook.set(word, wordBook.get(word) + 1);
		} else wordBook.set(word, 1);
	}
});

// 자주 나오는 단어 -> 단어 길이 긴 순서 -> 알파벳 순서 (localeCompare()로 대소문자 구분하지 않고 정렬 가능)
console.log([...wordBook].sort((a, b) => b[1] - a[1] || b[0].length - a[0].length || a[0].localeCompare(b[0])).map(el => el[0]).join('\n'));
