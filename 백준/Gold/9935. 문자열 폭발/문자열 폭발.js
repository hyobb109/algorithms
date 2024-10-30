const [str, bomb] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');

let stack = [];
const bombLen = bomb.length;
const strLen = str.length;
for (let i = 0; i < strLen; i++) {
  stack.push(str[i]);
  let tmp = stack.length - 1;
  let bombIdx = bombLen - 1;
  while (bombIdx >= 0) {
    if (stack[tmp] !== bomb[bombIdx]) break;
    tmp -= 1;
    bombIdx -= 1;
  }
  if (bombIdx === -1) {
    for (let j = 0; j < bombLen; j++) stack.pop();
  }
}

console.log(stack.length ? stack.join('') : 'FRULA');