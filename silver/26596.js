// 황금 칵테일
let [m, ...input] = require('fs').readFileSync('test.txt').toString().trim().split('\n');

function evaluate(cocktail) {
	let liquor = [...cocktail.keys()];
	for (let i = 0; i < liquor.length; i++) {
		for (let j = i + 1; j < liquor.length; j++) {
			let x = cocktail.get(liquor[i]);
			let y = cocktail.get(liquor[j]);
			if (x === Math.floor(y * 1.618) || y === Math.floor(x * 1.618))
				return "Delicious!";
		}
	}
	return "Not Delicious...";
}

let cocktail = new Map();
for (let i = 0; i < +m; i++) {
	let [liquor, q] = input[i].trim().split(' ');
	if (cocktail.has(liquor))
		cocktail.set(liquor, +q + cocktail.get(liquor));
	else cocktail.set(liquor, +q);
}

console.log(evaluate(cocktail));
