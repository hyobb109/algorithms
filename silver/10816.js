// 숫자 카드 2
let [n, cards, m, numbers] = require('fs').readFileSync('test.txt').toString().trim().split('\n').map(el => el.split(' ').map(Number));
let cardMap = new Map();
let res = '';

cards.forEach(el => cardMap.has(el) ? cardMap.set(el, cardMap.get(el) + 1) : cardMap.set(el, 1));
numbers.forEach(el => cardMap.has(el) ? res += cardMap.get(el) + ' ' : res += '0 ');
console.log(res.trim());