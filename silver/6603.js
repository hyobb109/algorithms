// 로또
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let res = '';

function ascending(lotto) {
  for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 6; j++) {
      if (lotto[i] > lotto[j]) return false;
    }
  }
  return true;
}

function pick(i, s, lotto) {
  if (i === 6) {
    if (ascending(lotto)) res += lotto.join(' ') + '\n';
    return;
  }
  for (let idx = 0; idx < s.length; idx++) {
    if (lotto.includes(s[idx])) continue;
    lotto[i] = s[idx];
    pick(i + 1, s, lotto);
  }
}

for (let i = 0; input[i] != 0; i++) {
  let s = input[i].split(' ').map(Number);
  s.shift();
  let lotto = [];
  pick(0, s, lotto);
  res += '\n';
}

console.log(res.trim());