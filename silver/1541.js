// 잃어버린 괄호
let input = require('fs').readFileSync('test.txt').toString().trim();

function onlyPlus(nums) {
	return nums.split('+').map(Number).reduce((acc, cur) => acc + cur);
}

function onlyMinus() {
	let numbers = input.split('-').map(Number);
	let firstNum = numbers.shift();
	return firstNum - numbers.reduce((acc, cur) => acc + cur);
}

function mixedSigns() {
	let numbers = input.split('-');
	let firstNum = numbers.shift();
	if (firstNum.indexOf('+') !== -1) firstNum = onlyPlus(firstNum);
	else firstNum = +firstNum;
	let total = 0;
	// console.log(firstNum);
	// console.log(numbers);
	numbers.forEach(el => el.indexOf('+') === -1 ? total -= Number(el) : total -= el.split('+').map(Number).reduce((acc, cur) => acc + cur))
	// console.log(total);
	return firstNum + total;
}

let res = 0;
if (input.indexOf('-') === -1) res = onlyPlus(input);
else if (input.indexOf('+') === -1) res = onlyMinus();
else res = mixedSigns();

console.log(res);