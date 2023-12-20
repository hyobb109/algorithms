const N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let res = '';

function drawStar(n, x, y) {
  if (parseInt(x / n) % 3 === 1 && parseInt(y / n) % 3 === 1) res += ' ';
  else {
    n === 1 ? (res += '*') : drawStar(n / 3, x, y);
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    drawStar(N, i, j);
  }
  res += '\n';
}

drawStar(N, 0, 0);
console.log(res.slice(0, -1));
