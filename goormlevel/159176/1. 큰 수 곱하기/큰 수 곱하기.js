// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let hundreds = [];
	for await (const line of rl) {
		hundreds = line.split(' ').map(BigInt);
		rl.close();
	}
	
	let res = hundreds.reduce((acc, curr) => acc * curr, 1n);
	console.log(res.toString());
	
	process.exit();
})();
