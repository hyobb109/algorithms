// 손익분기점
let input = require('fs').readFileSync('sample.txt').toString().trim().split(' ');

function bep(fc, vc, p) {
  if (p <= vc) {
    console.log(-1);
    return;
  }
  let q = fc / (p - vc); // 처음에 p = vc 인 경우 예외처리를 안해서 틀림
  console.log(Math.floor(q + 1));
}

let fc = Number(input[0]);
let vc = Number(input[1]);
let p = Number(input[2]);
bep(fc, vc, p);