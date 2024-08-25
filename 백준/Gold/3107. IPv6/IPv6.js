const input = require('fs').readFileSync(0).toString().trim();

let addr = input.split(':');
if (input.startsWith('::')) addr.shift();
if (input.endsWith('::')) addr.pop();
const len = addr.length;
let str = addr
  .map((num) =>
    num === ''
      ? new Array(9 - len).fill('0000').join(':')
      : num.padStart(4, '0')
  )
  .join(':');
console.log(str);
