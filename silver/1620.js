// 나는야 포켓몬 마스터 이다솜
// 배열 -> 시간초과, Object -> 시간초과
// Object와 Map의 차이는?
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
//let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(value => value.trim());

const num = input.shift().split(' ');
const n = Number(num[0]);
const m = Number(num[1]);

let pokedexName = new Map();
let pokedexNum = new Map();

for (let i = 0; i < n; i++) {
	let pokemon = input[i].trim();
	pokedexName.set(i + 1, pokemon);
	pokedexNum.set(pokemon, i + 1);
}

// if, else 보다 if, if else 가 빠름.. ??
let res = [];
for (let i = 0; i < m; i++) {
	let val = input[n + i].trim();
	if (isNaN(val) == false)
		res.push(pokedexName.get(Number(val)));
	else if (isNaN(val))
		res.push(pokedexNum.get(val));
}
console.log(res.join('\n'));