// 단어 수학
let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

// const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let n = Number(input.shift());
// console.log(n);
let alpha = new Array(26).fill(0);

function checkDigit(str) {
  let digit = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    // 알파벳의 자리수 계산
    let idx = str.charCodeAt(i) - 65;
    // let idx = ALPHABET.indexOf(str[0])
    // console.log(idx);
    alpha[idx] += 1 * Math.pow(10, digit);
    digit++;
  }
}

for (let i = 0; i < n; i++) {
  checkDigit(input[i]);
}
// console.log(alpha);
alpha = alpha.filter(value => value > 0).sort((a, b) => b - a);
// console.log(alpha);
let res = 0;
let num = 9;
for (let i = 0; i < alpha.length; i++) {
  res += alpha[i] * num--;
}
console.log(res);