// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let n, m;
	let set = new Set();
	let cnt = 0;
	let res = -1;
	for await (const line of rl) {
		if (!line) rl.close();
		if (!cnt) {
			const nums = line.split(' ').map(Number);
			n = nums[0];
			m = nums[1];
			++cnt;
		} else {
			set.add(line);
			if (set.size === n) res = cnt;
			else ++cnt;
		}
	}
	console.log(res);
	process.exit();
})();
