// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input = [];
	for await (const line of rl) {
		if (!line) rl.close();
		input.push(line.split(' ').map(Number));
	}
	const [N, M] = input[0];
	let houses = input[1];
	let hasRained = new Array(N).fill(false);
	let ranges = input.slice(2);
	ranges.forEach((range, idx) => {
		const day = idx + 1;
		const s = range[0] - 1;
		const e = range[1] - 1;
		for (let i = s; i <= e; i++) {
			hasRained[i] = true;
			++houses[i];
		}
		if (day % 3 === 0) {
			for (let i = 0; i < N; i++) {
				if (hasRained[i]) {
					--houses[i];
					hasRained[i] = false;
				}
			}
		}
	});
	console.log(houses.join(' '));
	process.exit();
})();
