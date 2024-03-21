const N = +require('fs').readFileSync('/dev/stdin').toString().trim();

const NUM = ['0', '1', '2'];

let comb = new Array(N);
let cnt = 0;
function getCount(k) {
  if (k === N) {
    let num = +comb.join('');
    if (num % 3 === 0) ++cnt;
    return;
  }
  for (let i = 0; i < 3; i++) {
    if (i === 0 && k === 0) continue;
    comb[k] = NUM[i];
    getCount(k + 1);
  }
}
getCount(0);
console.log(cnt);
