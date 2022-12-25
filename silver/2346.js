// 풍선 터뜨리기 -> 메모리초과..
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let n = Number(input.shift());
let num = input[0].split(' ').map((val, i) => [i + 1, Number(val)]);
let res = "";
let balloon = i = len = pos = 0;

while (res.length < n * 2) {
  balloon = num[i][0];
  res += balloon + ' ';
  pos = num[i][1];
  num.splice(i, 1);
  len = num.length;
  if (len === 1) {
    res += num[0][0];
    break;
  }
  if (pos > 0) pos--;
  i = (i + pos) % len;
  if (i < 0) i += len;
}
console.log(res);