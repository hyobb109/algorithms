const [n, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const t = +n;
let res = '';
for (let i = 0; i < t; i++) {
  res += `Class ${i + 1}\n`;
  const [total, ...scores] = input[i].split(' ').map(Number);
  scores.sort((a, b) => a - b);
  let maxGap = -1;

  for (let j = 1; j < total; j++) {
    const gap = scores[j] - scores[j - 1];
    if (gap > maxGap) maxGap = gap;
  }
  res += `Max ${scores[total - 1]}, Min ${scores[0]}, Largest gap ${maxGap}\n`;
}

console.log(res);
