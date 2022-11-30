// 북극곰은 괄호를 찢어
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('sample.txt').toString().split('\n');

function check(n, s) {
  if (n % 2) {
    console.log(-1);
    return;
  }
  let cnt = 0;
  let day = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] == '(')
      cnt++;
    else
      cnt--;
    max = Math.abs(cnt);
    if (day <= max)
      day = max;
  }
  if (cnt) {
    console.log(-1);
    return;
  }
  console.log(day);
}

let n = Number(input.shift());
let s = input[0];
check(n, s);