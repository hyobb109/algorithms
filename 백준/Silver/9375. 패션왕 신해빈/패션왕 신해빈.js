let [t, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function count(map) {
  let cnt = 1;
  for (const [key, val] of map) {
    cnt *= val + 1;
  }
  return cnt - 1;
}

let res = [];
for (let i = 0; i < +t; i++) {
  let n = +input.shift();
  let map = new Map();
  input.splice(0, n).map((el) => {
    const [name, type] = el.split(' ');
    const val = map.has(type) ? map.get(type) + 1 : 1;
    map.set(type, val);
  });
  res.push(count(map));
}

console.log(res.join('\n'));
