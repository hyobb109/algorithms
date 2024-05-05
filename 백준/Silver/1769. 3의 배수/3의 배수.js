let x = require('fs').readFileSync('/dev/stdin').toString().trim();

let cnt = 0;
while (x >= 10) {
  x = x
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
  ++cnt;
}

let res = [cnt];
x % 3 === 0 ? res.push('YES') : res.push('NO');
console.log(res.join('\n'));
