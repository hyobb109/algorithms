//평균은 넘겠지
let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('sample.txt').toString().trim().split('\n');

let c = Number(input.shift());

for (let i = 0; i < c; i++) {
  let testCase = input.shift().split(' ').map(Number);
  let num = Number(testCase.shift());
  // 배열.reduce 사용하면 배열합계 쉽게 구할 수 있음
  const avg = testCase.reduce((x, y) => x + y) / num;
  let cnt = 0;
  for (let j = 0; j < num; j++) {
    if (testCase[j] > avg)
      cnt++;
  }
  // .toFixed(n) => n자리까지 반올림
  console.log((cnt * 100 / num).toFixed(3) + '%');
}
