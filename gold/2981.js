// 검문
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n').map(Number);
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function gcd(a, b) {
  if (b > a) {
    let tmp = a;
    a = b;
    b = tmp;
  }
  if (a % b === 0) return b;
  return gcd(b, a % b);
}

const n = input.shift();
let num = [];
for (let i = 0; i < n - 1; i++) {
  num.push(Math.abs(input[i] - input[i + 1]));
}

let d = num[0];
for (let i = 1; i < num.length; i++) {
  d = gcd(d, num[i]);
}

function divisor(el) {
  for (let i = 2; i < Math.ceil(Math.sqrt(el)); i++) {
    if (el % i === 0) {
      res.push(i);
      if (el / i !== i) res.push(el / i);
    }
  }
  res.push(el);
}

let res = [];
divisor(d);
let set = new Set(res);
// console.log(set);
console.log(Array.from(set).sort((a, b) => a - b).join(' '));