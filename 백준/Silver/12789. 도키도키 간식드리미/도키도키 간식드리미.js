let [n, input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let line = input.split(' ').map(Number);
let stack = [];
let num = 1;
line.forEach((el) => {
  el === num ? ++num : stack.push(el);
  while (stack.at(-1) === num) {
    stack.pop();
    ++num;
  }
});
stack.length ? console.log('Sad') : console.log('Nice');
