// 콰트로치즈피자
let [n, input] = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let set = new Set(input.split(' '));
let toppings = Array.from(set);
let res = 'sad';
let cnt = 0;
if (toppings.length >= 4) {
	toppings.forEach(el => el.endsWith('Cheese') ? cnt++ : res = 'sad');
}
if (cnt >= 4) res = 'yummy';
console.log(res);