// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	const map = new Map([
		['b', 'd'],
		['d', 'b'],
		['i', 'i'],
		['l', 'l'],
		['m', 'm'],
		['n', 'n'],
		['o', 'o'],
		['p', 'q'],
		['q', 'p'],
		['s', 'z'],
		['u', 'u'],
		['v', 'v'],
		['w', 'w'],
		['x', 'x'],
		['z', 's'],
	])
	let n;
	let words = [];
	for await (const line of rl) {
		if (!line) rl.close();
		if (!n) {
			n = +line;
			continue;
		}
		words.push(line);
	}
	let res = words.map((word) => {
		let mirrored = word.split('').reverse().map((c) => {
			const pair = map.get(c);
			return pair ?? '';
		}).join('');
		// console.log(`mirrored: ${mirrored} word: ${word} ${mirrored === word}`);
		return mirrored === word ? 'Mirror' : 'Normal';
	})
	console.log(res.join('\n'));
	process.exit();
})();
