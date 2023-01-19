// 숫자 카드
let input = require('fs').readFileSync('test.txt').toString().split('\n');

const set = new Set(input[1].split(' ').map(Number));
const cards = input[3].split(' ').map(Number);
let res = '';
cards.forEach(el => set.has(el) ? res += '1 ' : res += '0 ');
console.log(res.trim());