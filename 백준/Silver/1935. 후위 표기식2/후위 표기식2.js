const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
let map = new Map();
const equation = input[1];
input.slice(2).forEach((num, idx) => {
  const ascii = 'A'.charCodeAt() + idx;
  const key = String.fromCharCode(ascii);
  map.set(key, +num);
});

let res = [];
function calculate(val) {
  const b = res.pop();
  const a = res.pop();
  switch (val) {
    case '*':
      return a * b;
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '/':
      return a / b;
  }
}
const alpha = /[A-Z]/;
for (val of equation) {
  alpha.test(val) ? res.push(map.get(val)) : res.push(calculate(val));
}
console.log(res[0].toFixed(2));
