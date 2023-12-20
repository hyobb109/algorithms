const N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let res = new Array(N).fill(0).map(() => new Array(N).fill(' '));

function drawStar(n, x, y) {
  if (n === 1) {
    res[x][y] = '*';
    return;
  }
  for (let i = 0; i < 3; i++) {
    const cx = x + (n / 3) * i;
    for (let j = 0; j < 3; j++) {
      const cy = y + (n / 3) * j;
      if (i === 1 && j === 1) continue;
      else drawStar(n / 3, cx, cy);
    }
  }
}

drawStar(N, 0, 0);
console.log(res.map((el) => el.join('')).join('\n'));
