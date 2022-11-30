// 더하기 싸이클
let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('sample.txt').toString();
let cnt = 1;

// 재귀함수
function cnt_cycle(n, org) {
  let div = parseInt(n / 10);
  let mod = n % 10;
  let newNumber = mod * 10 + (div + mod) % 10;
  //  console.log(newNumber);
  if (newNumber == org) {
    console.log(cnt);
    return; // return cnt하니까 종료가 안됨.. 왜?
  }
  cnt++;
  cnt_cycle(newNumber, org);
}

let n = Number(input);
cnt_cycle(n, n);