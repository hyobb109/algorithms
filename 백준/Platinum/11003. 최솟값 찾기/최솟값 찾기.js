let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, L] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

const d = [];
let res = '';
let curr = 0;
numbers.forEach((number, i) => {
  if (curr < d.length && d[curr] < i - L + 1) ++curr;
  while (curr < d.length && numbers[d[d.length - 1]] > number) d.pop();
  d.push(i);

  res += +numbers[d[curr]] + ' ';
  if (i % 10000 === 0) {
    process.stdout.write(res);
    res = '';
  }
});

process.stdout.write(res);
