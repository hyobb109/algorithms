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
  if (str[i] === bomb[bombLen - 1]) {
    let cmp = stack.slice(-bombLen);
    if (cmp.join('') === bomb) stack.splice(-bombLen);
  }
}

console.log(stack.length ? stack.join('') : 'FRULA');
